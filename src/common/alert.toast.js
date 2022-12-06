import Toast from "react-native-toast-message";
import { View, Text } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";

import { MESSAGE_HANDLER } from "./message.handler";

export const toastConfig = {
  successToast: () => (
    <View
      style={tw.style(
        "flex flex-row items-center h-14 w-10/12 bg-white rounded-md border-l-4 border-l-teal-500 shadow-md"
      )}
    >
      <View
        style={tw.style(
          "flex justify-center items-center h-10 w-10 bg-teal-500 mx-3 rounded-lg"
        )}
      >
        <Ionicons name="alert-circle-outline" size={24} color="white" />
      </View>
      <View style={tw.style("flex flex-col justify-center")}>
        <Text style={tw.style("text-gray-700 text-base font-semibold m-0 p-0")}>
          Great!
        </Text>
        <Text style={tw.style("text-gray-500 text-sm font-medium -mt-1")}>
          {MESSAGE_HANDLER.REGISTER_SUCCESS}
        </Text>
      </View>
    </View>
  ),

  warningToast: ({ props }) => (
    <View
      style={tw.style(
        "flex flex-row items-center h-14 w-10/12 bg-white rounded-md border-l-4 border-l-amber-500 shadow-md"
      )}
    >
      <View
        style={tw.style(
          "flex justify-center items-center h-10 w-10 bg-amber-500 mx-3 rounded-lg"
        )}
      >
        <Ionicons name="alert-circle-outline" size={24} color="white" />
      </View>
      <View style={tw.style("flex flex-col justify-center")}>
        <Text style={tw.style("text-gray-700 text-base font-semibold m-0 p-0")}>
          {props.errorType}
        </Text>
        <Text style={tw.style("text-gray-500 text-sm font-medium -mt-1")}>
          {props.errorMessage}
        </Text>
      </View>
    </View>
  ),

  errorToast: ({ props }) => (
    <View
      style={tw.style(
        "flex flex-row items-center h-14 w-10/12 bg-white rounded-md border-l-4 border-l-red-500 shadow-md"
      )}
    >
      <View
        style={tw.style(
          "flex justify-center items-center h-10 w-10 bg-red-500 mx-3 rounded-lg"
        )}
      >
        <Ionicons name="close-circle-outline" size={24} color="white" />
      </View>
      <View style={tw.style("flex flex-col justify-center")}>
        <Text style={tw.style("text-gray-700 text-base font-semibold m-0 p-0")}>
          {props.errorType}
        </Text>
        <Text style={tw.style("text-gray-500 text-sm font-medium -mt-1")}>
          {props.errorMessage}
        </Text>
      </View>
    </View>
  ),

  staticErrorToast: ({ props }) => (
    <View
      style={tw.style(
        "flex flex-row items-center h-14 w-10/12 bg-white rounded-md border-l-4 border-l-red-500 shadow-md"
      )}
    >
      <View
        style={tw.style(
          "flex justify-center items-center h-10 w-10 bg-red-500 mx-3 rounded-lg"
        )}
      >
        <Ionicons name="close-circle-outline" size={24} color="white" />
      </View>
      <View style={tw.style("flex flex-col justify-center")}>
        <Text style={tw.style("text-gray-700 text-base font-semibold m-0 p-0")}>
          {props.errorType}
        </Text>
        <Text style={tw.style("text-gray-500 text-sm font-medium -mt-1")}>
          {props.errorMessage}
        </Text>
      </View>
    </View>
  ),
};

export const successToast = () => {
  Toast.show({
    type: "successToast",
  });
};

export const warningToast = (title, message) => {
  Toast.show({
    type: "warningToast",
    props: { errorType: title, errorMessage: message },
  });
};

export const errorToast = (title, message) => {
  Toast.show({
    type: "errorToast",
    props: { errorType: title, errorMessage: message },
  });
};

export const staticErrorToast = (title, message) => {
  Toast.show({
    type: "errorToast",
    props: { errorType: title, errorMessage: message },
  });
};
