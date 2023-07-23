import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useRef } from "react";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import { HeroImage } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();
  const animRefs = useRef([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const animationDelays = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000]; // Atrasos progressivos em milissegundos

  const startAnimations = (index) => {
    if (index >= animRefs.current.length) {
      return; // Parar a recursão quando todas as animações forem concluídas
    }

    animRefs.current[index]?.fadeInLeft().then(() => {
      // Chamar a próxima animação após a conclusão da animação atual
      startAnimations(index + 1);
    });
  };

  return (
    <SafeAreaView className="bg-white flex-1 relative">
      {/* first section */}
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <Animatable.View
          className="w-16 h-16 bg-black rounded-full items-center justify-center"
          animation="fadeInLeft"
          ref={(ref) => {
            animRefs.current[0] = ref;
          }}
          delay={animationDelays[0]}
        >
          <Text className="text-[#00BCC9] text-3xl font-semibold">Go</Text>
        </Animatable.View>
        <Animatable.Text
          className="text-[#2A2B4B] text-3xl font-semibold"
          animation="fadeInLeft"
          ref={(ref) => {
            animRefs.current[1] = ref;
          }}
          delay={animationDelays[1]}
        >
          Travel
        </Animatable.Text>
      </View>
      {/* second section */}
      <View className="px-6 mt-8 space-y-3">
        <Animatable.Text
          className="text-[#3C6072] text-[42px]"
          animation="fadeInLeft"
          ref={(ref) => {
            animRefs.current[2] = ref;
          }}
          delay={animationDelays[2]}
        >
          Enjoy the trip with
        </Animatable.Text>
        <Animatable.Text
          className="text-[#00BCC9] text-[38px] font-bold"
          animation="fadeInLeft"
          ref={(ref) => {
            animRefs.current[3] = ref;
          }}
          delay={animationDelays[3]}
        >
          Good Moments
        </Animatable.Text>
        <Animatable.Text
          className="text-[#3C6072] text-base"
          animation="fadeInLeft"
          ref={(ref) => {
            animRefs.current[4] = ref;
          }}
          delay={animationDelays[4]}
        >
          Discover new experiences, countries, and culture.
          We have the best options for your travel.
        </Animatable.Text>
      </View>
      {/* circle section */}
      <Animatable.View
        className="w-[350px] h-[350px] bg-[#00BCC9] rounded-full absolute bottom-36 -right-36"
        animation="fadeInRight"
        ref={(ref) => {
          animRefs.current[5] = ref;
        }}
        delay={animationDelays[5]}
      ></Animatable.View>
      <Animatable.View
        className="w-[390px] h-[390px] bg-[#E99] rounded-full absolute -bottom-28 -left-36"
        animation="fadeInLeft"
        ref={(ref) => {
          animRefs.current[6] = ref;
        }}
        delay={animationDelays[6]}
      ></Animatable.View>
      {/* Image Container */}
      <Animatable.View className="flex-1 relative items-center justify-center"
      animation="fadeInLeft"
      ref={(ref) => {
        animRefs.current[7] = ref;
      }}
      delay={animationDelays[7]}>
        <Image
        animation="fadeIn"
        ref={(ref) => {
          animRefs.current[7] = ref;
        }}
        delay={animationDelays[7]}
          source={HeroImage}
          className="w-full h-full object-cover mt-20"
        />
        <Animatable.View className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-b-2 border-[#00BCC9] 
        rounded-full items-center justify-center"
        animation="fadeInLeft"
        ref={(ref) => {
          animRefs.current[7] = ref;
        }}
        delay={animationDelays[7]}>
          <TouchableOpacity onPress={() => navigation.navigate("Discover")}>
            <Animatable.View className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
            animation="fadeInLeft"
            ref={(ref) => {
              animRefs.current[8] = ref;
            }}
            delay={animationDelays[8]}>
              <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default HomeScreen;


