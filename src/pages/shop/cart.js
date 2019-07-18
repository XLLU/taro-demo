import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Cart extends Component {
    config = {
        navigationBarTitleText: 'Cart'
    }

    render() {
        return (
            <View>
                Cart
            </View>
        )
    }
}

export default Cart