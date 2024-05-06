import { Pressable, Text, View, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native"
import { SelectList } from "react-native-dropdown-select-list"
import { useState } from "react"
import { COLORS, SIZES, FONTS } from "../../utils/theme";
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Dialog from "react-native-dialog";

function MaleService() {

    const [service, setService] = useState("");
    const [category, setCategory] = useState("");

    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const services = [
        { key: '1', value: 'Haircut' },
        { key: '2', value: 'Shaving' },
    ]

    const categories = {
        '1': [
            { key: '1.1', value: 'U-Shape' },
            { key: '1.2', value: 'V-Shape' },
            { key: '1.3', value: 'Army cut' },
        ],
        '2': [
            { key: '2.1', value: 'Beard' },
            { key: '2.2', value: 'Moustache' },
            { key: '2.3', value: 'All round' },
        ]
    }

    return (
        <ScrollView style={{ backgroundColor: COLORS.WHITE_BG }}>
            <SelectList
                setSelected={setService}
                data={services}
                placeholder={"Select Service"}
                defaultOption={{ key: '1', value: 'Haircut' }}
                boxStyles={styles.drop}
                search={false}
                fontFamily={FONTS.medium}
                dropdownStyles={{ marginVertical: 30, marginHorizontal: 30, backgroundColor: COLORS.WHITE }}
                dropdownItemStyles={{ paddingVertical: 10 }}
            />

            {service && (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ padding: 10, fontFamily: FONTS.medium, marginTop: 40, }}>Categories:</Text>
                    <TouchableOpacity>
                        <AntDesign name="pluscircleo" size={24} color={COLORS.PRIMARY} style={{ marginTop: 45, marginRight: 20 }} />
                    </TouchableOpacity>
                </View>
            )}

            {categories[service] && categories[service].map(category => (

                <View style={styles.list}>
                    <Text key={categories.key}>{category.value}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="square-edit-outline" size={30} color={COLORS.PRIMARY} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="delete-outline" size={30} color={COLORS.WARNING} />
                        </TouchableOpacity>
                    </View>
                </View>
            ))}

            <View style={styles.buttonGroup}>
                <Pressable style={[styles.button, { marginTop: 20 }]} onPress={showDialog}>
                    <Text style={[styles.text, { paddingRight: 10 }]} >Edit Service</Text>
                    {/* {icon && <AntDesign name={icon} size={24} color="white" />} */}
                </Pressable>
                <Pressable style={[styles.button, { marginTop: 20 }]} onPress={showDialog}>
                    <Text style={[styles.text, { paddingRight: 10 }]} >Add Service</Text>
                    {/* {icon && <AntDesign name={icon} size={24} color="white" />} */}
                </Pressable>
            </View>
            <Dialog.Container visible={visible}>
                <Dialog.Title>Edit Service</Dialog.Title>
                <Dialog.Input placeholder="Service name" value={service} />
                <Dialog.Button label="Cancel" onPress={handleCancel} />
                <Dialog.Button label="Delete" onPress={handleCancel} />
                <Dialog.Button label="Update" onPress={handleCancel} />
            </Dialog.Container>
        </ScrollView>

    )
}

export default MaleService

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 20,
        backgroundColor: COLORS.WHITE_BG
    },
    drop: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 30,
        marginTop: 30,
        marginHorizontal: 10,
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: COLORS.WHITE,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    buttonGroup: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        // width: '100%',
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        borderRadius: 30,
        backgroundColor: COLORS.PRIMARY,
        flexDirection: "row",
        paddingVertical: 15,
        marginHorizontal: 5
    },
    text: {
        fontSize: SIZES.medium,
        lineHeight: 21,
        fontFamily: FONTS.bold,
        letterSpacing: 0.25,
        color: "white",
    },
})