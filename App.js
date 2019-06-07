import React from "react";
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  View
} from "react-native";

import SearchInput from "./components/SearchInput";
import getImageForWeather from "./utils/getImageForWeather";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "Viamão"
    };
  }
  handleUpdateLocation = city => {
    this.setState({ location: city });
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather("Clear")}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>
              {this.state.location}
            </Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Cold</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24º</Text>

            <SearchInput
              placeholder="Informe a cidade desejada"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e"
  },
  textStyle: {
    textAlign: "center",
    fontFamily: Platform.OS === "ios" ? "AvenirNext-Regular" : "Roboto",
    color: "white"
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  imageContainer: {
    flex: 1
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 20
  }
});
