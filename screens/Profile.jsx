import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import Feather from '@expo/vector-icons/Feather';


export default function Profile() {
  const data = [
    { id: "1", url:"https://media.istockphoto.com/id/1224500457/pt/foto/programming-code-abstract-technology-background-of-software-developer-and-computer-script.jpg?s=612x612&w=0&k=20&c=lScWX2vwEasV_TD4_mVzG-9wgpQJbK5JY9Df-hd1T1k=", type: "image" },
    { id: "2", url:"https://media.istockphoto.com/id/1401307605/pt/foto/rear-of-female-web-expert-typing-on-computer-looking-at-monitors-while-sitting-indoors.jpg?s=612x612&w=0&k=20&c=u8uN88qo1V9hriSHDU4Ud-iDCXmSd_YM1lfQ4m9xOSY=", type: "image" },
    { id: "3", url:"https://media.istockphoto.com/id/1451456915/photo/female-freelance-developer-coding-and-programming-coding-on-two-with-screens-with-code.jpg?s=612x612&w=0&k=20&c=BFFIc-xOwzeRyR8ui9VkFKEqqqQFBbISJzr-ADN6hS8=", type: "image" },
    { id: "4", url:"https://picsum.photos/300/300?random=1", type: "image" },
    { id: "5", url:"https://picsum.photos/300/300?random=2", type: "image" },
    { id: "6", url:"https://picsum.photos/300/300?random=3", type: "image" },
    { id: "7", url:"https://picsum.photos/300/300?random=4", type: "image" },
    { id: "8", url:"https://picsum.photos/300/300?random=5", type: "image" },
    { id: "9", url:"https://picsum.photos/300/300?random=6", type: "image" },
    { id: "10", url:"https://picsum.photos/300/300?random=7", type: "image" },
    { id: "11", url:"https://picsum.photos/300/300?random=8", type: "image" },
    { id: "12", url:"https://picsum.photos/300/300?random=9", type: "image" },
    { id: "13", url:"https://picsum.photos/300/300?random10", type: "image" },
    { id: "14", url:"https://picsum.photos/300/300?random=11", type: "image" },
    { id: "15", url:"https://picsum.photos/300/300?random=12", type: "image" },
    { id: "16", url:"https://picsum.photos/300/300?random=13", type: "image" },
    { id: "17", url:"https://picsum.photos/300/300?random=14", type: "image" },
    { id: "18", url:"https://picsum.photos/300/300?random=15", type: "image" },
  ]

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.url}} style={styles.post}/>
      {item.type === "image" && (
        <View style={styles.iconWrapper}>
          <Feather name="image" size={24} color="#fff" />
        </View>
      )}
    </View>
  )

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      {/* HEADER */}
      <View style={styles.header}>
        <Entypo name="chevron-left" size={30} color="black" />
        <View style={styles.userGroup}>
          <Text style={styles.userText}>codefive</Text>
          <MaterialIcons name="verified" size={24} color="rgba(6, 114, 238, 1)" />
        </View>
        <View style={styles.headerActions}>
          <FontAwesome5 name="bell" size={24} color="black" />
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </View>
      </View>

      {/* PROFILE */}
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQy2bZQLK7nPlLn14qAdhRemW4RThkRIxtPA&s",
          }}
        />
        <View style={styles.status}>
          <View style={styles.valueContainer}>
            <Text style={styles.profileValue}>6956</Text>
            <Text style={styles.valueText}>Publicações</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.profileValue}>27,7m</Text>
            <Text style={styles.valueText}>Seguidores</Text>
          </View>
          <View style={styles.valueContainer}>
            <Text style={styles.profileValue}>219</Text>
            <Text style={styles.valueText}>A seguir</Text>
          </View>
        </View>
      </View>

      {/* PROFILE INFO */}
      <View style={styles.profileInfoContainer}>
        <Text style={styles.name}>Codefive</Text>
        <Text style={styles.employ}>Agência</Text>
        <Text style={styles.description}>
          O seu site de sonhos, está no sitio certo. 💻
        </Text>
        <Text style={styles.link}>codefive.pt</Text>
      </View>

      {/* FOLLOWERS */}
      <View style={styles.followersContainer}>
        <View style={styles.imageSamples}>
          <Image
            style={styles.person}
            source={{
              uri: "https://jornalistainclusivo.com/wp-content/uploads/2022/10/Gio-pessoa-com-Sindrome-de-Down-Foto-Uinstock-Iza-Guedes-copiar.jpg",
            }}
          />
          <Image
            style={styles.person}
            source={{
              uri: "https://static.vecteezy.com/ti/fotos-gratis/t2/6913998-jovem-estudante-com-laptop-sorrindo-usando-fone-de-ouvido-durante-video-chamada-homem-com-laptop-imagens-foto.jpg",
            }}
          />
          <Image
            style={styles.person}
            source={{
              uri: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PostImagem/41559/banco-de-imagens-a-importacircncia-de-desenvolver-um-para-sua-empresa_o1fa1bg74m1cgi1fmpinmp7kq39e.jpg",
            }}
          />
        </View>
        <View style={styles.knowPeople}>
          <Text style={styles.knowPeopleText}>
            Seguido por{" "}
            <Text style={{ fontWeight: "bold" }}>joaocorreia09, vanda.carvalho</Text>{" "}
            e <Text style={{ fontWeight: "bold" }}>16 outros amigos</Text>
          </Text>
        </View>
      </View>

      {/* ACTION BUTTONS */}
      <View style={styles.profileActionButtonsContainer}>
        <View style={styles.textActionButtons}>
          <TouchableOpacity style={[styles.actionButton, styles.follow]}>
            <Text style={styles.followText}>Seguir</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton]}>
            <Text>Mensagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton]}>
            <Text>Contactar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.addFriend}>
          <Ionicons name="person-add-outline" size={16} color="black" />
        </TouchableOpacity>
      </View>

      {/* HIGHLIGHTS */}
      <ScrollView contentContainerStyle={styles.hightlightsContainer} horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <Entypo name="light-bulb" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>Design Tips</Text>
        </View>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="work" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>Portfolio</Text>
        </View>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <MaterialIcons name="source" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>Resources</Text>
        </View>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="cursor-default-click"
              size={36}
              color="#d4d804ff"
            />
          </View>
          <Text style={styles.highlightName}>UI Basics</Text>
        </View>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <AntDesign name="pluscircleo" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>Outro</Text>
        </View>
        <View style={styles.highlight}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="robot" size={36} color="#d4d804ff" />
          </View>
          <Text style={styles.highlightName}>AI</Text>
        </View>
      </ScrollView>

      {/* PROFILE TABS */}
      <View style={styles.profileTabsContainer}>
          <View style={[styles.gridIconContainer, styles.icon]}><MaterialIcons name="grid-on" size={36} color="black" /></View>
          <View style={[styles.videoIconContainer, styles.icon]}><Octicons name="video" size={36} color="#8d8d8dff" /></View>
          <View style={[styles.personIconContainer, styles.icon]}><AntDesign name="user" size={36} color="#8d8d8dff" /></View>
      </View>

      {/* POSTS GRID */}
      <View style={styles.imageGridContainer}>
        <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        scrollEnabled={false}
      />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingTop: 40,
    paddingBottom: 20,
  },

  //HEADER
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userGroup: {
    gap: 5,
    flexDirection: "row",
    width: 60,
  },
  userText: {
    fontSize: 16,
  },
  headerActions: {
    gap: 10,
    flexDirection: "row",
  },
  //PROFILE
  profileContainer: {
    gap: 16,
    flexDirection: "row",
    marginTop: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderColor: "#d62976",
    borderWidth: 2,
  },
  status: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  profileValue: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  valueText: {
    fontSize: 16,
  },
  //PROFILE INFO
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  employ: {
    fontSize: 16,
    color: "#a2a2a2ff",
  },
  description: {
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    color: "#0049b0ff",
  },
  //PEOPLE
  followersContainer: {
    width: "100%",
    gap: 5,
    flexDirection: "row",
    paddingHorizontal: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  imageSamples: {
    flexDirection: "row",
  },
  person: {
    width: 35,
    height: 35,
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 40,
    marginLeft: -10,
  },
  knowPeopleText: {
    fontSize: 14,
  },
  //BTN ACTIONS
  profileActionButtonsContainer: {
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    gap: 15,
    marginTop: 10,
  },
  textActionButtons: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
  },
  actionButton: {
    width: "33.3%",
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    padding: 5,
    borderRadius: 8,
    height: 30,
  },
  follow: {
    backgroundColor: "#0095F6",
  },
  followText: {
    color: "#fff",
  },
  addFriend: {
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    backgroundColor: "#EFEFEF",
    width: 30,
    borderRadius: 5,
  },
  //HIGHLIGHTS
  hightlightsContainer: {
    flexDirection: "row",
    marginTop: 20,
    gap: 16,
    paddingHorizontal: 5,
    justifyContent: "center",
  },
  highlight: {
    gap: 4,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: "#cacacaff",
    borderWidth: 4,
  },
  highlightName: {
    textAlign: "center",
  },
  //PROFILE TABS
  profileTabsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15
  },
  icon: {
    width: "33.3%",
    alignItems: "center"
  },
  gridIconContainer: {
    borderBottomColor: "#000",
    borderBottomWidth: 3,
    paddingBottom: 4
  },
  //IMAGE POSTS
  imageGridContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 4,
    
  },
  itemContainer: {
  flex: 1,
  aspectRatio: 1,
  margin: 1,
  position: "relative",
},
iconWrapper: {
  position: "absolute",
  top: 5,
  right: 5,
  zIndex: 1
},
post: {
  width: "100%",
  height: "100%",
},

});
