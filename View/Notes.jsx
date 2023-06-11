import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
  Modal,
} from "react-native";
import React, { useState } from "react";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
  MenuProvider,
} from "react-native-popup-menu";

// Другие записи...../image/error.png

export const Notes = ({ navigation }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [deleteConfirmationVisible, setDeleteConfirmationVisible] =
    useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const openPhotoModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const handleDeleteIconPress = (index) => {
    setDeleteConfirmationVisible(true);
    setDeleteIndex(index);
  };

  const handleDeleteConfirmation = () => {
    // Удаляем запись по индексу
    const newData = [...data];
    newData.splice(deleteIndex, 1);
    setData(newData);

    // Скрываем модальное окно подтверждения удаления
    setDeleteConfirmationVisible(false);
  };

  const handleCancelDelete = () => {
    // Скрываем модальное окно подтверждения удаления
    setDeleteConfirmationVisible(false);
  };
  const data = [
    {
      id: 1,
      type: "Вакцинация",
      date: "06.12.2022",
      formattedDate: "06.12.2022",
      drugName: "Препарат1",
      frequency: "Раз в неделю",
      comment: "Пример комментария",
    },
    {
      id: 2,
      type: "Анализы",
      date: "06.12.2022",
      formattedDate: "06.12.2022",
      testName: "Анализ мочи",
      comment: "Пример комментария",
      photo: require("../image/Ekspertiza.jpg"),
    },
    // Другие записи...
  ];

  return (
    <MenuProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={styles.noteContainer}>
            <View style={styles.noteHeader}>
              <Text style={styles.noteType}>{item.type}</Text>
              <Text style={styles.noteDate}>{item.formattedDate}</Text>
              <TouchableOpacity
            
            onPress={() => handleDeleteIconPress(index)}
          >
            <Image
              source={require("../image/error.png")}
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
            </View>
            <View style={styles.noteContent}>
              {item.type === "Вакцинация" && (
                <>
                  <Text style={styles.noteText}>
                    Название препарата: {item.drugName}
                  </Text>
                  <Text style={styles.noteText}>
                    Регулярность: {item.frequency}
                  </Text>
                </>
              )}
              {item.type === "Анализы" && (
                <>
                  <Text style={styles.noteText}>
                    Название проверки: {item.testName}
                  </Text>
                  {item.photo && (
                    <TouchableOpacity
                      onPress={() => openPhotoModal(item.photo)}
                    >
                      <Image source={item.photo} style={styles.notePhoto} />
                    </TouchableOpacity>
                  )}
                </>
              )}
              <Text style={styles.noteText}>Комментарий: {item.comment}</Text>
            </View>
          </TouchableOpacity>
        ))}
        <Modal visible={deleteConfirmationVisible} transparent={true} >
          <View style={styles.modalContainer}>
            <Text style={styles.confirmationText}>
              Вы уверены, что хотите удалить запись?
            </Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={handleCancelDelete}
              >
                <Text style={styles.buttonText}>Отмена</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={handleDeleteConfirmation}
              >
                <Text style={styles.buttonText}>Удалить</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal visible={selectedPhoto !== null} transparent={true}>
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={closePhotoModal}
            >
              <Image
                source={require("../image/error.png")}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <Image
              source={selectedPhoto}
              style={styles.enlargedPhoto}
              resizeMode="contain"
            />
          </View>
        </Modal>
      </ScrollView>
    </MenuProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  noteContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
  },
  noteHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  noteType: {
    fontSize: 16,
    fontWeight: "bold",
  },
  noteDate: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    padding: 8,
  },
  deleteIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  noteContent: {},
  noteText: {
    marginBottom: 8,
    fontSize: 14,
    color: "#555555",
  },
  notePhoto: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 1,
  },
  closeIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  enlargedPhoto: {
    width: "100%",
    height: "100%",
  },
  deleteButton: {
    padding: 10,
  },

  menuOptionText: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  confirmationModal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },

  confirmationText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },

  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelButton: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginRight: 10,
  },

  deleteButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
