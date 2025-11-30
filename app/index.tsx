import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>

      {/* Ô đỏ nhỏ hơn */}
      <View
        style={{
          flex: 2,                     // Giảm từ 2 xuống 1 để nhỏ lại
          backgroundColor: 'red'
        }}
      />

      {/* Dải xanh lá có 2 ô nhỏ */}
      <View
        style={{
          flex: 2,
          backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>1</Text>
        </View>

        <View
          style={{
            width: 70,
            height: 70,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ color: 'black', fontSize: 20 }}>2</Text>
        </View>
      </View>

      {/* Phần xanh dương có ô vàng chạm đáy */}
      <View
        style={{
          flex: 8,                      //  Tăng flex phần xanh dương cho hợp lý
          backgroundColor: 'skyblue',
          justifyContent: 'flex-end',   //  Đưa nội dung xuống đáy
          alignItems: 'center'
        }}
      >
        <View
          style={{
            width: 130,
            height: 130,
            backgroundColor: 'gold',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 0              //  Đảm bảo chạm hẳn đáy
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: 'bold' }}>ABC</Text>
        </View>
      </View>

    </View>
  );
}