import { useState } from "react";
import { ScrollView, View } from "react-native";
import { LockIconSvg } from "~/assets/icon/svg.assets";
import HomeMainCard from "~/components/shared/HomeMainCard";
import { Button } from "~/components/ui/button";
import { Checkbox } from "~/components/ui/checkbox";
import { InputField } from "~/components/ui/inputField";
import { Text } from "~/components/ui/text";

const Login = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1, marginTop: 100, paddingHorizontal: 16 }}
    >
      <View style={{ flex: 1, gap: 10, padding: 20 }}>
        <Text className="text-right">Login</Text>
        <Button variant="secondary">
          <Text> Default</Text>
        </Button>
        <InputField label="Username" required />
        <InputField
          placeholder="Type something..."
          size="default"
          label="Password"
          isPassword
          required
          startIcon={<LockIconSvg />}
        />
        <Checkbox
          checked={isChecked}
          onToggle={() => setIsChecked(!isChecked)}
          label="Remember me"
        />
        {/* <CommonHeader />
        <BottomNavigator /> */}
        <HomeMainCard />
      </View>
      {/* <SidebarModal /> */}
    </ScrollView>
  );
};

export default Login;
