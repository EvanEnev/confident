import Nav from '@/src/components/Nav'
import Hero from '@/src/components/Hero'
import Menu from '@/src/components/Menu'
import Location from '@/src/components/Location'
import OrderCTA from '@/src/components/OrderCTA'
import Footer from '@/src/components/Footer'
import OrderMobileButton from '@/src/components/OrderMobileButton'

export interface Tab {
  id: number
  label: string
}

export interface Tag {
  [key: number | string]: [string, string][]
}

interface Drink {
  cat: number
  name: string
  price: string
  desc: string
  tags: [string, string][]
}

const DISABLED_CATS = [
  'допы бар',
  'допы кухня',
  'ланч',
  'бутилированные напитки',
]

const tagsByCategoryMap: Tag = {
  97: [['cold', 'Холодный']],
  854: [['sig', 'Сезон']],
  96: [['hot', 'Горячий']],
  9: [['dish', 'Еда']],
  63: [['dish', 'Еда']],
  72: [['dish', 'Еда']],
  77: [['salad', 'Салат']],
  86: [['dish', 'Еда']],
}

const tagsMap: Tag = {
  'Можно холодным': [['cold', 'Можно холодным']],
  'Можно горячим': [['hot', 'Можно горячим']],
}

export default async function Home() {
  const res = await fetch(
    `https://dk452.quickresto.ru/platform/online/api/tree?moduleName=warehouse.nomenclature.dish`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + btoa('dk452:XxSZPev5'),
      },
    },
  )

  const data = await res.json()

  const quickCategories = data.filter(
    (d: {className: string; name: string; id: number}) =>
      d.className ===
      'ru.edgex.quickresto.modules.warehouse.nomenclature.dish.DishCategory',
  )

  const disabledIds = DISABLED_CATS.map(c => {
    console.debug(
      quickCategories.find(
        (d: {name: string}) => d.name.toLowerCase() === c.toLowerCase(),
      ),
    )
    return quickCategories.find(
      (d: {name: string}) => d.name.toLowerCase() === c.toLowerCase(),
    )?.id
  }).filter(Boolean)

  const rawCategories = quickCategories.filter(
    (d: {className: string; name: string; id: number}) =>
      d.className ===
        'ru.edgex.quickresto.modules.warehouse.nomenclature.dish.DishCategory' &&
      !disabledIds.includes(d.id),
  )

  const rawDishes = data.filter(
    (d: {
      className: string
      displayOnTerminal: boolean
      parentItem: {id: number}
    }) =>
      d.className ===
        'ru.edgex.quickresto.modules.warehouse.nomenclature.dish.Dish' &&
      d.displayOnTerminal &&
      !disabledIds.includes(d.parentItem.id),
  )

  const categories: Tab[] = rawCategories.map(
    (d: {id: number; name: string}) => {
      return {
        id: d.id,
        label: d.name,
      }
    },
  )

  const dishes: Drink[] = rawDishes.map(
    (d: {
      name: string
      price: number
      storeItemTags: {
        id: number
        name: string
      }[]
      parentItem: {id: number}
    }) => {
      const tags = tagsByCategoryMap[d.parentItem.id]
        ? [...tagsByCategoryMap[d.parentItem.id]]
        : []
      if (d.storeItemTags?.length > 0) {
        d.storeItemTags.forEach(storeItemTag => {
          const tag = tagsMap[storeItemTag.name]

          if (tag) {
            tags.push(...tag)
          }
        })
      }

      return {
        cat: d.parentItem.id,
        name: d.name,
        price: d.price,
        desc: '',
        tags: tags || [],
      }
    },
  )

  return (
    <>
      <Nav />
      <main>
        <Hero menuLength={dishes.length} />
        <Menu categories={categories} dishes={dishes} />
        <Location />
        <OrderCTA />
        <OrderMobileButton />
      </main>
      <Footer />
    </>
  )
}
