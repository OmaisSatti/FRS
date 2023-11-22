import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
const CustomHeader = ({ title, props, iconRight, iconLeft, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.img} source={iconLeft} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity style={{ marginRight: 10 }}>
                <Text></Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
        width: '100%',
        paddingHorizontal: 20,
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontFamily: 'SF-Pro-Rounded-Medium',
        fontSize: 18,
        fontStyle: 'normal',
        alignSelf: 'center',
        color: '#000',
    },
    img: {
        height: 35,
        width: 35,
        resizeMode: 'contain'
    },
    bell: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    }
});
export default CustomHeader;