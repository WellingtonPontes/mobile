import { StyleSheet} from "react-native"


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer:{
    flexDirection:'column',
    borderColor: '#FFF',
    borderWidth: 2,
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#D4D4D4'
  },
  InputContainer:{
    width: '80%',
    flexDirection:'column',
    justifyContent: 'center',
    alignContent: 'center',
  }
});


export default styles