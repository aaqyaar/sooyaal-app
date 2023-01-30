import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { useTheme } from "@/theme/ThemeProvider";
import { fonts } from "@/constants/fonts";
import { Button } from "@/components";

export default function CreatePostScreen() {
  const { colors, dark } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        // alignItems: "center",
        backgroundColor: colors.primary,
      }}
    >
      <ScrollView
        style={{
          marginHorizontal: 20,
          marginTop: 20,
        }}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: 20,
            fontFamily: fonts.primary.medium,
          }}
        >
          Create Post
        </Text>

        <View
          style={{
            marginTop: 20,
            backgroundColor: colors.primary,
          }}
        >
          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              marginBottom: 5,
            }}
          >
            Title
          </Text>
          <TextInput
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              borderRadius: 5,
              padding: 10,
              borderColor: colors.text,
              borderWidth: 0.17,
              marginBottom: 10,
            }}
            placeholder="Title"
            placeholderTextColor={colors.text}
          />

          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              marginBottom: 5,
            }}
          >
            Content
          </Text>
          <TextInput
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              borderRadius: 5,
              padding: 10,
              borderColor: colors.text,
              borderWidth: 0.17,
              marginBottom: 10,

              height: 150,
              justifyContent: "flex-start",
            }}
            numberOfLines={10}
            multiline={true}
          />

          <Text
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              marginBottom: 5,
            }}
          >
            Title
          </Text>
          <TextInput
            style={{
              color: colors.text,
              fontSize: 16,
              fontFamily: fonts.primary.regular,
              borderRadius: 5,
              padding: 10,
              borderColor: colors.text,
              borderWidth: 0.17,
            }}
            placeholder="Title"
            placeholderTextColor={colors.text}
          />
        </View>

        <View
          style={{
            marginTop: 20,
            backgroundColor: colors.primary,
          }}
        >
          <Button
            variant="contained"
            onPress={() => console.log("Create Post")}
          >
            Save
          </Button>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});