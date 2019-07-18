import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import SearchBar from '../../components/search-bar'


class ShopIndex extends Component {
    config = {
        navigationBarTitleText: 'Taro Demo'
    }

    switchTab() {
        Taro.switchTab({
            url: '/pages/shop/cart'
        })
    }

    render() {
        return (
            <view>
                <SearchBar />
                <View className='page-demo'>
                    <Text className='mx-1' onClick={this.switchTab.bind(this)}>
                        SwitchTab
                    </Text>
                </View>
            </view>
        )
    }
}

export default ShopIndex

