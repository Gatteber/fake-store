import Card from "./Card"

type Props = {
    data: Array<any>;
}

export default function LatestArrivals({ data }: Props) {
  return (
    <div>
        <h2>Latest Arrivals</h2>
        <Card />
        <Card />
        <Card />
        <Card />
        <div>
            <p>
                {/* {data[0].title} */}
            </p>
        </div>
    </div>
  )
}