import {NextResponse} from "next/dist/server/web/spec-extension/response";

type Category = "all" | "espresso" | "milk" | "cold" | "signature";

interface Drink {
    cat: number;
    name: string;
    price: string;
    desc: string;
    tags: [string, string][];
}

export interface Tab { id: Category; label: string }


const DISABLED_CATS = ['допы бар', 'допы кухня', 'ланч', 'бутилированные напитки']

export async function GET() {
    const res = await fetch(`https://dk452.quickresto.ru/platform/online/api/tree?moduleName=warehouse.nomenclature.dish`, {
        headers: {'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('dk452:XxSZPev5')}
    })

    const data = await res.json()

    const rawCategories = data.filter((d: {className: string, name: string}) =>
        d.className === "ru.edgex.quickresto.modules.warehouse.nomenclature.dish.DishCategory"
        && !DISABLED_CATS.includes(d.name.toLowerCase().trim())
    )
    const rawDishes = data.filter((d: {className: string, displayOnTerminal: boolean, parentItem: {id: number}}) =>
        d.className === "ru.edgex.quickresto.modules.warehouse.nomenclature.dish.Dish"
        && d.displayOnTerminal
        && !DISABLED_CATS.includes(rawCategories.find((d1: {id: number}) =>
                d1.id === d.parentItem.id)?.name?.toLowerCase()
)
    )

    const categories: Tab[] = rawCategories.map((d: {id: number, name: string}) => {
        return {
            id: d.id,
            label: d.name,
        }
    })

    const dishes: Drink[] = rawDishes.map((d: {name: string, price: number, parentItem: {id: number}}) => {
        return {
            cat: d.parentItem.id,
            name: d.name,
            price: d.price,
            desc: '',
            tags: []
        }
    })

    return NextResponse.json({categories, dishes}, {status: 200})
}