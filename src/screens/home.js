import React, {Component} from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

class Home extends Component {
    render() {
        const navigate = () => {
            this.props.navigation.navigate('Question1');
        };
        return (
            <View style={styles.container}>
                <View style={styles.subContainer1}>
                    <Text
                        style={{
                            padding: 10,
                            fontSize: 40,
                            color: '#00bcd4',
                            width: '100%',
                        }}>
                        Melawan COVID19
                    </Text>
                </View>
                <View style={styles.subContainer2}>
                    <ScrollView>
                        <Text style={{padding: 10, top: 15, fontSize: 20}}>
                            Penyakit dan virus ini pertama kali ditemukan ketika
                            terjadi wabah di Wuhan, China di bulan Desember
                            2019. Gejala paling umum adalah demam, kelelahan,
                            dan batuk kering. Beberapa pasien mungkin mengalami
                            sakit dan nyeri, hidung tersumbat, pilek, sakit
                            tenggorokan atau diare. Sumber : WHO
                        </Text>
                        <Text style={{padding: 10, top: 10, fontSize: 20}}>
                            Waspada ? Harus. Panik ? Jangan
                        </Text>
                        <Text style={{padding: 10, top: 10, fontSize: 20}}>
                            Kurangi Rasa Khawatirmu dan ikutlah berpartisipasi
                            untuk mengurangi penyebaran virus dengan mencari
                            tahu lebih dalam tentang Coronavirus (COVID-19)
                        </Text>
                    </ScrollView>
                </View>
                <View style={styles.subContainer3}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.4}
                        onPress={() => navigate()}>
                        <Text style={{fontSize: 20, color: '#fff'}}>
                            Deteksi Dini
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    subContainer1: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    subContainer2: {
        flex: 4,
    },
    subContainer3: {
        flex: 1,
    },
    button: {
        padding: 20,
        top: 30,
        backgroundColor: '#ff5722',
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 200,
        flexDirection: 'row',
        marginLeft: 10,
    },
});

export default Home;
