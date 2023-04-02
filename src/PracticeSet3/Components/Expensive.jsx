export const Expensive=({bouquet})=>{
    return (<ol>
{bouquet.map(({flowers,price})=>price>2000?flowers.map(data=><li>{data}</li>):"")}
    </ol>
)
}