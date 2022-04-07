import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5556D6',
  white: '#FFFFFF',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: '#000',
  },
  buttonsBox: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#FF9427',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuListBox: {
    marginVertical: 5,
  },
  menuOption: {
    marginHorizontal: 8,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuOptionText: {
    fontSize: 20,
    marginLeft: 4,
  },
  settingsButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
