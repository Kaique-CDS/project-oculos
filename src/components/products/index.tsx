import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import './styles.scss'
import 'react-tabs/style/react-tabs.css'
import { Product } from '../product'

import image from '../../assets/images/products/1.jpg'
import image2 from '../../assets/images/products/2.jpg'
import image3 from '../../assets/images/products/3.jpg'

export function Products() {
  const products = [
    {
      name: 'Produto 1',
      price: 1000,
      image: image,
      date: '19.06.24',
    },
    {
      name: 'Produto 2',
      price: 2000,
      image: image2,
      date: '19.06.24',
      available: true,
    },
    {
      name: 'Produto 3',
      price: 3000,
      image: image3,
      date: '19.06.24',
    },
  ]

  return (
    <article className="container">
      <h2>Products</h2>

      <Tabs style={{ margin: '2rem 0' }}>
        <TabList style={{ margin: 0 }}>
          <Tab>All</Tab>
          <Tab>Available</Tab>
          <Tab>Disabled</Tab>
        </TabList>

        <TabPanel>
          {products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              image={product.image}
              date={product.date}
              available={product.available || false}
            />
          ))}
        </TabPanel>
        <TabPanel>2</TabPanel>
        <TabPanel>3</TabPanel>
      </Tabs>
    </article>
  )
}
