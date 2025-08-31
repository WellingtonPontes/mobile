import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerLogo: {
    backgroundColor: "#7e7c67ff",
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 400,
    height: 200,
  },
  texto: {
    fontSize: 30,
    color: '#ffffffff',
    fontWeight: 'bold',
    marginBottom: 100, 
  },
  containerForms: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#D3D3D3"
  },
  containerFormsConteudo:{
    flexGrow: 1, 
    justifyContent: "center",
    alignItems: "center",
  },
  label:{
    alignItems: 'flex-start',
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input:{
    width: "100%",
    borderColor: '#FFF',
    borderBottomWidth: 2,
    maxWidth: "95%",
    marginBottom: 5,
  },
  textarea:{
    borderColor: '#FFF',
    borderWidth: 2,
    maxWidth: "100%",
    height: 200,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top'
  },
  botao:{
    backgroundColor: '#fffb1aff', 
    borderRadius: 10, 
    paddingVertical: 14, 
    paddingHorizontal: 20, 
    alignItems: 'center', 
    elevation: 8,
    width: "100%",
    marginTop: 15,
    fontWeight: 'bold',
  }
});