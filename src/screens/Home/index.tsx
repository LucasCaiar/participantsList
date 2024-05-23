import React, { useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleAddParticipant() {
    if (!participantName.trim()) return;

    if (participants.includes(participantName.trim())) {
      return Alert.alert("Este participante já existe na lista!");
    }
    setParticipants((prevState) => [...prevState, participantName.trim()]);
    setParticipantName("");
  }

  function handleRemoveParticipant(name: string) {
    return Alert.alert(`Deseja remover participante ${name}?`, "", [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native </Text>
      <Text style={styles.eventDate}>18 de Janeiro de 2024 </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Insira seu nome"
          placeholderTextColor={"white"}
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Sem participantes no momento. Adicione participantes na lista de
            presença.
          </Text>
        )}
      />
    </View>
  );
}
