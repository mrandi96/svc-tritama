/**
 * StackHeaderComponent.
 * Show header tab navigation stack
 * how to use: import { StackHeader } from './Components/Header/StackHeader.component';
 *
 * @param {function} onPressBack - Function executed when back button is pressed. (Required)
 * @param {string} title - Prop if is set to true, the right component will be displayed.
 */
import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Images } from '../../Themes';
import { Styles } from './Styles/FormuploadStyle'
import PropTypes from 'prop-types';

class Formupload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rows: [1, 2]
        }
    }
    _addRow = () => {
        const newValue = this.state.rows[this.state.rows.length - 1] + 1;
        this.setState({ rows: [...this.state.rows, newValue] })
    }
    renderButton = () => {
        return this.state.rows.map(e => (
            <TouchableOpacity key={e} style={Styles.containerViewCamera} >
                <Image source={Images.plusIcon} style={Styles.plusIcon} />
            </TouchableOpacity >
        ))
    }
    render() {
        const { onPress } = this.props
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={true}>
                <View style={Styles.containerStyle}>
                    <View style={Styles.containerViewCamera}>
                        <Image source={Images.cameraIcon} style={Styles.cameraIcon} />
                    </View>
                    {this.state.rows.map(e => (
                        <TouchableOpacity key={e} onPress={onPress} style={Styles.containerViewCamera} >
                            <Image source={Images.plusIcon} style={Styles.plusIcon} />
                        </TouchableOpacity >
                    ))}
                    <TouchableOpacity onPress={() => this._addRow()} style={Styles.buttonAddMore}>
                        <Text style={Styles.textAddMore}>+Add More</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        )
    }
}


// const Formupload = (props) => {
//     const [rows, setRows] = useState([1])

//     useEffect(() => {
//         renderButton
//     }, [rows])

//     function _addRow() {
//         rows.push(rows + 1)
//     }

//     const renderButton = () => {
//         return rows.map(e => (
//             <TouchableOpacity key={e} style={Styles.containerViewCamera} >
//                 <Image source={Images.plusIcon} style={Styles.plusIcon} />
//             </TouchableOpacity >
//         ))
//     }

//     return (
//         <ScrollView contentContainerStyle={{ flexGrow: 1 }} horizontal={true}>
//             <View style={Styles.containerStyle}>
//                 <View style={Styles.containerViewCamera}>
//                     <Image source={Images.cameraIcon} style={Styles.cameraIcon} />
//                 </View>
//                 {/* {renderButtonAdd()} */}
//                 {renderButton()}
//                 <TouchableOpacity onPress={_addRow} style={Styles.buttonAddMore}>
//                     <Text style={Styles.textAddMore}>+Add More</Text>
//                 </TouchableOpacity>
//             </View>
//         </ScrollView>

//     )
// }

Formupload.propTypes = {
    avatarImageSrc: PropTypes.string,
    name: PropTypes.string,
    phoneNo: PropTypes.string,
};

export { Formupload };

