import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, ScrollView, Alert, Modal } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';
import LogoInsta from '../assets/instaLogo.png'
import { useNavigation } from '@react-navigation/native';
import Profile from './Profile';


const USUARIO_DEMO = "aluno@senai.br";
const SENHA_DEMO = "123456";

export default function Login() {
    const [usuario, SetUsuario] = useState("");
    const [senha, SetSenha] = useState("");
    const [mostrarSenha, SetMostrarSenha] = useState(false);
    const [erroVissivel, SetErroVissivel] = useState(false);
    const [mensagemErro, SetMensagemErro] = useState("");

    const navigation = useNavigation();
    const valido = usuario.trim().length && senha.length >= 6;

    const tentarLogin = () => {
        if (!valido) {
            SetMensagemErro("Preencha usuario e senha");
            SetErroVissivel(true);
            return;

        }
        if (usuario.trim() === USUARIO_DEMO && senha === SENHA_DEMO) {
            navigation.reset({ routes: [{ name: "TabRoutes", params: { screen: "Profile" } }] })
        } else {
            SetMensagemErro("Usuario ou senha Invalidas");
            SetErroVissivel(true);
        }
    }




    return (
        <View style={styles.container}>
            <Image style={{ width: 240, height: 80 }} source={LogoInsta} />
            <View style={styles.formulario}>
                <TextInput style={styles.campo}
                    placeholder='Telefone, nome de usuario ou email'
                    autoCapitalize='none'
                    autoCorrect={false}
                    returnKeyType='next'
                    value={usuario}
                    onChangeText={SetUsuario}

                />
                <View style={styles.linhaSenha}>
                    <TextInput style={styles.campo}
                        placeholder='Senha'
                        autoCapitalize='none'
                        autoCorrect={false}
                        textContentType='password'
                        secureTextEntry={mostrarSenha}
                        value={senha}
                        onChangeText={SetSenha}

                    />
                    <TouchableOpacity onPress={() => SetMostrarSenha(!mostrarSenha)} style={styles.botaoMostrar}>
                        <Feather name={mostrarSenha ? "eye-off" : "eye"} size={18} color="black" />
                    </TouchableOpacity>

                </View>
                <TouchableOpacity onPress={tentarLogin}
                    disabled={!valido}
                    style={[styles.botaoEntrar, !valido && styles.botaoEntrarDesabilitado]}>
                    <Text style={styles.textoEntrar}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text >Criar conta</Text>
                </TouchableOpacity>


            </View>
            <Modal transparent visible={erroVissivel} animationType='fade' onRequestClose={() => SetErroVissivel(false)}>
                <View style={styles.fundoModal}>
                    <View style={styles.cartaoModal}>
                        <TouchableOpacity >
                            <MaterialIcons name="report-problem" size={26} color="black" />
                        </TouchableOpacity>
                        <Text style={styles.tituloModal}>Ops!</Text>
                        <Text style={styles.mensagemModal}>{mensagemErro}</Text>
                        <TouchableOpacity style={styles.botaoModal} onPress={() => SetErroVissivel(false)}>
                            <Text>Tentar Novamente </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

// Paleta
const AZUL = "#0095F6";
const BORDA = "#dbdbdb";
const TEXTO = "#262626";
const SUAVE = "#8e8e8e";
const FUNDO = "#fff";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: FUNDO,
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 25,
        alignItems: "center",
        justifyContent: "center",
    },

    logo: {
        fontSize: 42,
        fontWeight: "600",
        color: TEXTO,
        marginBottom: 12,
    },

    formulario: {
        width: "100%",
        maxWidth: 380,
    },

    campo: {
        height: 44,
        borderWidth: 1,
        borderColor: BORDA,
        borderRadius: 6,
        paddingHorizontal: 12,
        backgroundColor: "#fafafa",
        color: TEXTO,
        marginBottom: 10,
    },

    linhaSenha: {
        position: "relative",
        justifyContent: "center",
        marginBottom: 8,
    },
    campoSenha: {
        paddingRight: 44,
        marginBottom: 6,
    },
    botaoMostrar: {
        position: "absolute",
        right: 10,
        height: 44,
        width: 32,
        alignItems: "center",
        justifyContent: "center",
    },

    botaoEsqueci: {
        alignSelf: "flex-end",
        marginBottom: 24,
    },
    textoEsqueci: {
        color: AZUL,
        fontSize: 12,
        fontWeight: "600",
    },

    botaoEntrar: {
        height: 44,
        backgroundColor: AZUL,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    botaoEntrarDesabilitado: {
        opacity: 0.4,
    },
    textoEntrar: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 15,
    },

    areaDivisor: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 18,
    },
    divisor: {
        flex: 1,
        height: 1,
        backgroundColor: BORDA,
        marginHorizontal: 12,
    },
    ou: {
        color: SUAVE,
        fontWeight: "700",
        fontSize: 12,
    },

    botaoFacebook: {
        height: 44,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: BORDA,
        alignItems: "center",
        justifyContent: "center",
    },
    linhaFacebook: {
        flexDirection: "row",
        alignItems: "center",
    },
    textoFacebook: {
        color: "#1877F2",
        fontWeight: "700",
        marginLeft: 8,
    },

    caixaCadastro: {
        width: "100%",
        maxWidth: 380,
        borderWidth: 1,
        borderColor: BORDA,
        borderRadius: 6,
        alignItems: "center",
        flexDirection: "row",
        gap: 6,
        justifyContent: "center",
        paddingVertical: 18,
        marginTop: 18,
    },
    textoCadastro: {
        color: TEXTO,
    },
    link: {
        color: AZUL,
        fontWeight: "700",
    },

    // MODAL
    fundoModal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.4)",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
    },
    cartaoModal: {
        width: "100%",
        maxWidth: 360,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 20,
        alignItems: "center",
    },
    iconeModal: {
        marginBottom: 8,
    },
    tituloModal: {
        fontSize: 18,
        fontWeight: "700",
        color: TEXTO,
        marginBottom: 6,
    },
    mensagemModal: {
        color: TEXTO,
        textAlign: "center",
        marginBottom: 16,
    },
    botaoModal: {
        height: 42,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: BORDA,
        paddingHorizontal: 16,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 140,
    },
    textoBotaoModal: {
        color: TEXTO,
        fontWeight: "700",
    },
    botaoModalPrimario: {
        backgroundColor: AZUL,
        borderColor: AZUL,
    },
    textoBotaoModalPrimario: {
        color: "#fff",
        fontWeight: "700",
    },
});
