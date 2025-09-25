import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Logo from '../assets/instaLogo.png';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';




export default function SignUp() {

        const navigation = useNavigation();

    return (
        <View style={style.container}>
            <View style={style.containerCaixa}>
                <Image
                    style={{ width: 270, height: 90, borderColor: "#0000" }}
                    source={Logo}
                />
                <Text style={{ fontSize: 20, width: 280, textAlign: "center", fontWeight: "600", color: "#858585ff" }}>
                    Cadastra-se para ver fotos e vídeos dos seus amigos.
                </Text>

                <TouchableOpacity style={style.botaoFace}>
                    <Entypo name="facebook" size={24} color="#fff" />
                    <Text style={style.entrar}>Entrar com o Facebook</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                    <View style={style.linha} />
                    <Text style={{ fontSize: 18, color: "#8a8a8aff" }}>OU</Text>
                    <View style={style.linha} />
                </View>

                <View style={style.linhaSenha}>
                    <TextInput style={style.campo} placeholder="Número do celular ou email" />
                </View>
                <View style={style.linhaSenha}>
                    <TextInput style={style.campo} placeholder="Nome Completo" />
                </View>
                <View style={style.linhaSenha}>
                    <TextInput style={style.campo} placeholder="Nome de Usuário" />
                </View>
                <View style={style.linhaSenha}>
                    <TextInput style={style.campo} placeholder="Senha" />
                </View>
                <TouchableOpacity style={{backgroundColor:"#87e7ffff", color:"#fff", padding:10, width:260, alignItems:"center", borderRadius:6}}>
                    <Text style={{color:"#fff"}}>Cadastrar-se</Text>
                </TouchableOpacity>
                <View style={{gap:0,alignItems:"center" , marginBottom:20}}>
                    <Text style={{fontSize:12, color:"#858585ff"}}>Ao se cadastrar, você concordava com nossos</Text>
                <Text style={{fontWeight:600, fontSize:12, color:"#858585ff"}}>Termos, Política de Dados e Política de Cookies.</Text>
                </View>
            </View>
            <View style={style.containerCaixaBaixo}>
<TouchableOpacity style={style.caixinha} onPress={() => navigation.navigate("Login")}>
                    <Text >Tem uma Conta? <Text style={{color:"#097db3ff"}}>Conecte-se</Text></Text>
                </TouchableOpacity>

            </View>
        </View >
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff",
        gap: 12,
    },
    containerCaixa: {
        borderWidth: 0.5,
        borderColor: "#989898ff",
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        width: "80%",
    },
    containerCaixaBaixo: {
        borderWidth: 0.5,
        borderColor: "#989898ff",
        padding: 14,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        width: "80%",
    },
    botaoFace: {
        width: 270,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#2391ffff",
        color: "#fff",
        padding: 10,
        borderRadius: 6,
        justifyContent: "center"
    },
    entrar: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 17
    },
    linha: {
        width: 110,
        borderWidth: 1,
        height: 1,
        borderColor: "#c1c1c1ff"
    },
    linhaSenha: {
        marginBottom: 2,
    },
    campo: {
        width: 270,
        height: 45,
        borderWidth: 1,
        borderColor: "#b6b6b6ff",
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor:"#f7f7f7ff"
    }
});
