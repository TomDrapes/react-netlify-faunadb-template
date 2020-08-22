import React, { memo, useContext, useMemo, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import { Screen } from "../../common/Screen";
import { ECard } from "../../common/Card";
import { CustomThemeContext } from "../../../theme/CustomThemeContext";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import { object as YupObject, string as YupString } from "yup";
import { FormikInput } from "../../common/FormikInput";
import { FormikSubmitButton } from "../../common/FormikSubmitButton";
import { AuthContext } from "../../../auth/AuthContext";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const GET_USERS = gql`
  query GetUsers($id: ID!) {
    findUserByID(id: $id) {
      firstName
    }
  }
`;

const validationSchema = YupObject().shape({
  email: YupString().required("Please provide a valid email"),
  password: YupString().required("Password is required"),
});

const LoginScreen = memo(() => {
  const navigation = useNavigation();
  const { theme } = useContext(CustomThemeContext);
  const authContext = useContext(AuthContext);

  const initialValues = useMemo(() => ({ email: "", password: "" }), []);

  const { loading, data } = useQuery(GET_USERS, {
    variables: { id: "270842767588983309" },
  });

  useEffect(() => console.log(data), [data]);

  const handleSubmit = (values: { email: string; password: string }) => {
    authContext?.authDispatch.signIn(values);
  };

  return (
    <Screen>
      <Text>{"My App"}</Text>
      <ECard title="Please login">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          onSubmit={handleSubmit}
        >
          <View>
            <FormikInput
              name="email"
              placeholder="Please enter your email"
              leftIcon={{ name: "email", type: "material", solid: true }}
            />
            <FormikInput
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              leftIcon={{ name: "lock", type: "material" }}
            />
            <FormikSubmitButton title="Submit" type="solid" />

            <Button
              title="Forgot password"
              type="clear"
              titleStyle={{ color: theme.secondaryText }}
            />
            <Button
              type="clear"
              title="Create account"
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </Formik>
      </ECard>
    </Screen>
  );
});

export { LoginScreen };
