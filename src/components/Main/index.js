import React from "react";
import styles from "./style";
import { View, Text } from "react-native";

export default function Main(){
    return(
        <View style={styles.main}>
            <View style={styles.Desc}>
                <Text style={styles.TEXT}>Experiências</Text>
        
                <Text style={styles.text}>Gerente de produção • FRIPEIXES NARDI LTDA</Text>
            
                <Text style={styles.Text}>Programação web</Text>
                <View>
                <Text style={styles.text}>• HTML</Text>
                <Text style={styles.text}>• CSS</Text>
                <Text style={styles.text}>• JavaScript</Text>
                <Text style={styles.text}>• MySQL</Text>
                </View>
                
                <Text style={styles.Text}>Programação Microcontroladores</Text>

                <View>
                <Text style={styles.text}>• C++</Text>
                <Text style={styles.text}>• MySQL</Text>
                <Text style={styles.text}>• Web Server</Text>
                </View>
            </View>
            <View style={styles.Desc}>
                <Text style={styles.TEXT}>Cursos</Text>
                <Text style={styles.Text}>Graduação UniFatecie - BR</Text>
                <Text style={styles.text}>1/4 Engenharia de Software</Text>
                <Text style={styles.Text}>Udemy Cod3r Cursos Online</Text>
                <Text style={styles.text}>Curso Web Moderno Completo com JavaScript 2022</Text>
                <Text style={styles.Text}> Udemy Jamilton Damasceno</Text>
                <Text style={styles.text}>Desenvolvimento Android java Completo 2022</Text>
                <Text style={styles.Text}>One Bit Code</Text>
                <Text style={styles.text}>Curso React Native (aprendiz)</Text>
            </View>
        </View>
    )
};