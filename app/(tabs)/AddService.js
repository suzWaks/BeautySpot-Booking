
import {Picker} from 'react-native-ui-lib';

const dialogOptions = [
    { label: 'Option 1', value: 0 },
    { label: 'Option 2', value: 1 },
    { label: 'Option 3', value: 2 },
    { label: 'Option 4', value: 3, disabled: true },
    { label: 'Option 5', value: 4 },
    { label: 'Option 6', value: 5 },
    { label: 'Option 7', value: 6 },
    { label: 'Option 8', value: 6 }
];

function AddService() {


    <Picker
        placeholder="Favorite Languages (up to 3)"
        value={this.state.languages}
        onChange={items => this.setState({ languages: items })}
        mode={Picker.modes.MULTI}
        selectionLimit={3}
        trailingAccessory={dropdownIcon}
    >
        {dialogOptions.map(options, option => (
            <Picker.Item key={option.value} value={option.value} label={option.label} disabled={option.disabled} />
        ))}
    </Picker>

}

export default AddService