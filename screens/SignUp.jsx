import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Logo from '../assets/instaLogo.png';
import Entypo from '@expo/vector-icons/Entypo';

export default function SignUp() {
    return (
        <View style={style.container}>
            <View style={style.containerCaixa}>
                <Image
                    style={{ width: 270, height: 90, borderColor: "#0000" }}
                    source={Logo}
                />
                <Text style={{ fontSize: 20, width: 280, textAlign: "center", fontWeight: "600", color: "#686868ff" }}>
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
                <TouchableOpacity>
                    <Text>Cadastrar-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        backgroundColor: "#fff"
    },
    containerCaixa: {
        borderWidth: 0.5,
        borderColor: "#989898ff",
        padding: 12,
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    botaoFace: {
        width: 270,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        backgroundColor: "#0783ffff",
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
        borderColor: "#b0b0b0ff",
        paddingLeft: 10,
        borderRadius: 5
    }
});
