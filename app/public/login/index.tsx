import { ScrollView, View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

const Login = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, marginTop: 100, paddingHorizontal: 16 }}
    >
      <View style={{ flex: 1 }}>
        <Text className="text-right">Login</Text>
        <Button variant="secondary">
          <Text> Default</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Login;
