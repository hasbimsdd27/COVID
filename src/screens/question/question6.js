import React, {Component} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';
import {
    Container,
    Header,
    Left,
    Body,
    Right,
    Button,
    Icon,
    Title,
} from 'native-base';

import {connect} from 'react-redux';
import {addAnswer} from '../../_actions/answer';

class PertanyaanView extends Component {
    render() {
        return (
            <Container>
                <View style={styles.container}>
                    <View style={styles.formCard}>
                        <Text style={{fontSize: 20}}>
                            Apakah Anda Mengalami Sesak Nafas ?
                        </Text>
                    </View>
                    <View style={styles.Button}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                this.props.addAnswer(6, 1),
                                    this.props.navigation.navigate('Question7');
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    fontSize: 25,
                                }}>
                                Ya!
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.Button}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => {
                                this.props.addAnswer(6, 0),
                                    this.props.navigation.navigate('Question7');
                            }}>
                            <Text
                                style={{
                                    color: 'white',
                                    textAlign: 'center',
                                    fontSize: 25,
                                }}>
                                Tidak
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#eeeeee',
    },
    Button: {
        marginTop: 20,
        backgroundColor: '#09B5A4',
        borderColor: '#09B5A4',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
    },
});

const mapStateToProps = state => {
    return {
        Answer: state.Answer,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addAnswer: (question, answer) => dispatch(addAnswer(question, answer)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PertanyaanView);
