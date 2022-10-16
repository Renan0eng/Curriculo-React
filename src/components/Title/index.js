import React from "react";
import styles from "./style";
import { View, Text, Image } from "react-native";

export default function Title(){
    return(
        <View style={styles.tilte}>
            <View style={styles.imageView}>
                <Image
                style={styles.imageTitle}
                source={{uri: 'https://renan0eng.github.io/Site-Analise-De-Solo/img/Renan.jpeg'}}
                />
            </View>
            <View style={styles.viewText}>
                <Text style={styles.textName}>
                    Renan Nardi
                </Text>
                <View>
                    <View style={styles.textView}>
                    <Image
                    style={styles.imageIcon}
                    source={require('../../../assets/chamada-telefonica.png')}
                    /> 
                    <Text><a style={styles.textA} href="https://drive.google.com/file/d/1fYeNp6cGIBCKy2UwJICi_edfRZSasAtz/view?usp=drivesdk" target="_blank">(44)  991571020</a></Text> 
                    </View>
                    <View style={styles.textView}>
                    <Image
                    style={styles.imageIcon}
                    source={require('../../../assets/github.png')}
                    /> 
                    <Text><a style={styles.textA} href="https://github.com/Renan0eng" target="_blank">GitHub</a></Text> 
                    </View>
                    <View style={styles.textView}>
                    <Image
                    style={styles.imageIcon}
                    source={require('../../../assets/localizacao.png')}
                    /> 
                    <Text><a style={styles.textA} href="https://maps.app.goo.gl/WmpqdfFtUz9bZbVEA" target="_blank">Terra rica – PR – Brasil</a></Text>
                    </View>
                    <View style={styles.textView}>
                    <Image
                    style={styles.imageIcon}
                    source={require('../../../assets/instagram.png')}
                    /> 
                    <Text><a style={styles.textA} href="https://www.instagram.com/renan_nardii/" target="_blank">Instagram</a></Text> 
                    </View>
                </View>
            </View>
        </View>
    )
};