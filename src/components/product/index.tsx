import './styles.scss'

interface Props {
  name: string
  price: number
  image: string
  date: string
  available: boolean
}

export function Product(props: Props) {
  return (
    <div className="product">
      <div
        className="image"
        style={{
          background: `url(${props.image}) no-repeat center`,
          backgroundSize: 'cover',
        }}
      />

      {props.available && <label>Available</label>}

      <div className="content">
        <p>{props.name}</p>
        <footer>
          <span>{props.date}</span>
          <span>$ {props.price}</span>
        </footer>
      </div>
    </div>
  )
}
