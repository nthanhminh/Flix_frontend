import { Combo, Food } from '@/utils/typeOfResponse'
import FoodOption from '../FoodOption/FoodOption'
import styles from './styles.module.css'

const FoodList = (
    {
        title,
        list,
        type
    } : {
        title: string,
        list: Food[] | Combo[],
        type: number
    }
) => {
    return (
            <div className={styles.food_item}>
                <div className={styles.food_item_title}>
                    {title}
                </div>
                <div className={styles.food_item_container}>
                    {/* <FoodOption />
                    <FoodOption />
                    <FoodOption />
                    <FoodOption /> */}
                    {
                        list.map((item) => {
                            return (
                                <FoodOption item={item} key={item.id} type={type}/>
                            )
                        })
                    }
                </div>
            </div>
    )
}

export default FoodList