import styles from './Header.module.scss'
import {useStoreState} from '../../state';

export const Header = () => {

    const page = useStoreState('page')

    return <div className={styles.headerComponent}>
        <h2 className={styles.title}>
            {page === 'productList' && 'Product list Page'}
            {page === 'product' && 'Product Page'}
        </h2>
    </div>
}