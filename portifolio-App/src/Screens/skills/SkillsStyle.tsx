import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#73a3cf',
  },
  barra:{

  },
  img:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 50,
    marginTop: -50
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 400,
    marginBottom: 15,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkedinButton: {
    backgroundColor: '#0A66C2',
  },
  githubButton: {
    backgroundColor: '#333333',
  },
  portfolioButton: {
    backgroundColor: '#007BFF',
  },
  nome:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20
  },
  container2:{  
    flexDirection: 'column', 
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: '100%',
  }
});