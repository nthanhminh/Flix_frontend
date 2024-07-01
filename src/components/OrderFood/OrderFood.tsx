import FoodList from '../OrderPageComponent/FoodList/FoodList'
import styles from './styles.module.css'
const OrderFoodPage = () => {
    return (
        <div className={styles.container}>
            <FoodList title="Hotdog"></FoodList>
            <FoodList title="Coca"></FoodList>
            <FoodList title="Hotdog"></FoodList>
        </div>
    )
}

export default OrderFoodPage