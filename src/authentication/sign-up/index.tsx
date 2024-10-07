import {
  Text,
  Pressable,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeadingAndDesc from "../../component/heading/index";
import { signUpStyle } from "./style";
import { Controller, useForm } from "react-hook-form";
import InputComponent from "../../component/input-comp";
import PrimaryButton from "../../component/primary-button";
import PasswordIcon from "../../assets/svg/eye-icon";
import { CountryPicker } from "react-native-country-codes-picker";
interface FormData {
  fullname: string;
  phoneNo: string;
  email: string;
  password: string;
  term: string;
  errors: string;
  country_code: string;
}

const SignUp = () => {
  const [flag, setFlag] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const {
    control,
    setValue,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      fullname: "",
      phoneNo: "",
      email: "",
      password: "",
      term: "",
      country_code: "",
    },
  });
  const SubmitData = (data: FormData) => {
    console.log(data);
    // Here you can add your API call to register the user
    reset();
  };
  return (
    <ScrollView>
      <View style={signUpStyle.container}>
        <View style={signUpStyle.mainView}>
          <View style={signUpStyle.imageView}>
            <Image
              source={require("../sign-up/images/profileImage.png")}
              style={signUpStyle.profileImage}
            />
          </View>
          <HeadingAndDesc
            heading={"Register to create account"}
            desc={"Get your cab and convenience for 24x 7"}
          />
        </View>
        <View style={signUpStyle.formView}>
          <View>
            <Controller
              control={control}
              name="fullname"
              render={({ field: { value, onChange, onBlur } }) => (
                <View>
                  <InputComponent
                    lable={"Full Name"}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value ?? ""}
                  />
                  {errors?.fullname && (
                    <Text style={signUpStyle.error}>
                      {errors?.fullname.message}
                    </Text>
                  )}
                </View>
              )}
              rules={{ required: "Full Name is requred*" }}
            />
          </View>
          <View style={signUpStyle.mainInputView}>
            <View>
              <Controller
                name="phoneNo"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <View>
                    <Text>Phon No</Text>
                    <View style={signUpStyle.inputView2}>
                      <Controller
                        name="country_code"
                        control={control}
                        render={({ field: { value } }) => (
                          <TouchableOpacity
                            onPress={() => setShow(true)}
                            style={signUpStyle.countryCode}
                          >
                            <Text style={signUpStyle.countryCodeText}>
                              {flag || "🇮🇳"} {`+${value || "91"}`}
                            </Text>
                          </TouchableOpacity>
                        )}
                        defaultValue=""
                      />
                      <InputComponent
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        keyboardType={"number-pad"}
                        styleContainer={signUpStyle.input}
                        style={signUpStyle.inputText}
                        maxLength={10}
                      />
                      <View style={{ zIndex: 1 }}>
                        <CountryPicker
                          style={{ modal: { flex: 1 } }}
                          initialState="+91"
                          lang={"en"}
                          show={show}
                          onRequestClose={() => setShow(false)}
                          onBackdropPress={() => setShow(false)}
                          pickerButtonOnPress={(item) => {
                            setValue(
                              "country_code",
                              `${item.dial_code.replace("+", "")}`
                            );
                            setFlag(item.flag);
                            setShow(false);
                          }}
                        />
                      </View>
                    </View>
                    {errors.phoneNo && (
                      <Text style={signUpStyle.error}>
                        {errors.phoneNo?.message}
                      </Text>
                    )}
                  </View>
                )}
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Please enter valid phone number",
                  },
                }}
              />
            </View>
          </View>
          <View>
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange, onBlur } }) => (
                <View>
                  <InputComponent
                    lable={"Email"}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value ?? ""}
                  />
                  {errors?.email && (
                    <Text style={signUpStyle.error}>
                      {errors?.email.message}
                    </Text>
                  )}
                </View>
              )}
              rules={{ required: "Email is required*" }}
            />
          </View>
          <View>
            <Controller
              control={control}
              name="password"
              render={({ field: { value, onChange, onBlur } }) => (
                <View>
                  <InputComponent
                    lable={"Create password"}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value ?? ""}
                    icon={PasswordIcon}
                    style={{ width: "80%" }}
                  />
                  {errors?.password && (
                    <Text style={signUpStyle.error}>
                      {errors?.password.message}
                    </Text>
                  )}
                </View>
              )}
              rules={{ required: "Password is required*" }}
            />
          </View>
          <View style={signUpStyle.readit}>
            <Text style={signUpStyle.term}>By continuing, i confirm i have read the</Text>
            <Text style={signUpStyle.condition}> term and condition</Text>
            <Text style={signUpStyle.term}> and</Text>
            <Text style={signUpStyle.condition}> privacy policy</Text>
          </View>
          <View style={signUpStyle.mainBtnView}>
            <PrimaryButton title={"Next"} onPress={handleSubmit(SubmitData)} />
            <View style={signUpStyle.registerView}>
              <Text style={signUpStyle.registerText}>Already registered?</Text>
              <Text style={signUpStyle.loginText}>Log In</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
