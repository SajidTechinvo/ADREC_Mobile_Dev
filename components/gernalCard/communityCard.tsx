import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";
import { View, Text, Image } from "react-native";
import CustomSkeleton from "../shared/CustomSkeleton";

export interface ICommunityResponse {
  result: ICommunity[];
  success: boolean;
  error: any;
}

export interface ICommunity {
  id: number;
  createdBy: any;
  body: string;
  bodyAr: string;
  creationDate: number;
  subject: string;
  subjectAr: string;
  validUntil: number;
  topic: Topic;
  priority: number;
  hotTopic: number;
  hotTopicUntil: any;
  numberOfLikes: number;
  numberOfComments: number;
  media: Media;
  newsSource: any;
  congratulationFor: any;
  contactNo: any;
  documents: Document[];
  thumbnailDocuments: any;
}

export interface Topic {
  id: number;
  nameEn: string;
  nameAr: string;
}

export interface Media {
  docId: number;
  docName: string;
  externalDocumentId: string;
  extDocThumbId: any;
  contentType: string;
}

export interface Document {
  docId: number;
  docName: string;
  externalDocumentId: string;
  extDocThumbId: any;
  contentType: string;
}

const CommunityCard = () => {
  const { data: community, isLoading } = useQuery({
    queryKey: ["community"],
    queryFn: () => axios.get("/news"),
    select: (res: AxiosResponse<ICommunityResponse>): ICommunity[] => {
      return res.data.result;
    },
  });

  return (
    <View className="flex-row gap-5">
      {isLoading ? (
        <>
          {[0, 1, 2, 3, 4].map((index) => (
            <CustomSkeleton
              key={index}
              height={300}
              width={200}
              marginEnd={16}
            />
          ))}
        </>
      ) : (
        <>
          {community?.map((item, index) => {
            return (
              <View
                className="border  w-[240px] rounded-lg items-center border-white py-2 bg-white px-4"
                key={index}
              >
                <View className="pt-2">
                  <Image
                    source={require("../../assets/images/communityimage.png")}
                  />
                  <View className="py-5 gap-2">
                    <Text className="text-base font-bold">{item.subject}</Text>
                    <Text className="text-base" numberOfLines={10}>
                      {item?.body}
                    </Text>
                  </View>
                  <View className="items-center pb-2">
                    <View className="border border-[#169F9F] rounded-full px-4 py-2 w-full items-center">
                      <Text className="text-[#169F9F] text-base font-normal ">
                        Join today
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          })}
        </>
      )}
    </View>
  );
};

export default CommunityCard;
