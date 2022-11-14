import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useRoute } from '@react-navigation/native';
import {Entypo} from '@expo/vector-icons'
import logoImg from '../../assets/others/logo-nlw-esports.png';
import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { TouchableOpacity, View, Image} from 'react-native';
import { THEME } from '../../theme';
import { Heading } from '../../components/Heading';
import { useNavigation } from '@react-navigation/native';

export function Game() {
    const route = useRoute();
    const navigation = useNavigation();
    const {id, title, bannerUrl} = route.params as GameParams

function handleGoBack(){
    navigation.goBack();
}

  return (
    <Background>
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity   onPress={handleGoBack}>
                    <Entypo 
                        name='chevron-thin-left'
                        color={THEME.COLORS.CAPTION_300}
                        size={24}
                    />
                </TouchableOpacity> 
                    <Image 
                    source={logoImg}
                    style={styles.logo}
                    />
                <View style={styles.volume} />
            </View>
            <Heading 
                title={title}
                subtitle="Conecte-se e comece a jogar"
            />

        </SafeAreaView>
    </Background>
  );
}