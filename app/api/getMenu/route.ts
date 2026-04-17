import {NextResponse} from "next/dist/server/web/spec-extension/response";

type Category = "all" | "espresso" | "milk" | "cold" | "signature";

interface Drink {
    cat: Exclude<Category, "all">;
    name: string;
    price: string;
    desc: string;
    tags: [string, string][];
}

export interface Tab { id: Category; label: string }


export async function GET() {
    const res = await fetch(`https://dk452.quickresto.ru/platform/online/api/list?moduleName=warehouse.nomenclature.dish&className=ru.edgex.quickresto.modules.warehouse.nomenclature.dish.DishCategory`, {
        headers: {'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('dk452:XxSZPev5')}
    })

    const resDishes = await fetch(`https://dk452.quickresto.ru/platform/online/api/list?moduleName=warehouse.nomenclature.dish&className=ru.edgex.quickresto.modules.warehouse.nomenclature.dish.Dish`, {
        headers: {'Content-Type': 'application/json', 'Authorization': 'Basic ' + btoa('dk452:XxSZPev5')}
    })

    // const drinks: Drink[] = (await resDishes.json()).map((dish: any) => {
    //     return {name: dish.itemTitle as string, price: dish.}
    // })

    console.debug(res)
    return NextResponse.json((await resDishes.json()))
}