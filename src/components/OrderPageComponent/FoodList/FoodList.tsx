import FoodOption from '../FoodOption/FoodOption'
import styles from './styles.module.css'

const FoodList = (
    {
        title
    } : {
        title: string
    }
) => {
    return (
            <div className={styles.food_item}>
                <div className={styles.food_item_title}>
                    {title}
                </div>
                <div className={styles.food_item_container}>
                    <FoodOption />
                    <FoodOption />
                    <FoodOption />
                    <FoodOption />
                </div>
            </div>
    )
}

export default FoodList