import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Profile extends Component {
    config = {
        navigationBarTitleText: 'Profile'
    }

    render() {
        return (
            <View>
                User Profile
            </View>
        )
    }
}

export default Profile