import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Button } from 'react-native';

// const appId = '<INSERT_SPEECHLY_APP_ID_HERE>';
// const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
// SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const speechtoText = () => {

    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    // const startListening = () => SpeechRecognition.startListening({ continuous: true });

//    if (!browserSupportsSpeechRecognition) {
//         return <span>Browser doesn't support speech recognition.</span>;
//      }

    useEffect(() => {
        SpeechRecognition.startListening({ continuous: true,  language: 'en-US' });
        console.log('listening starts');
    }, [])

    // if (!browserSupportsSpeechRecognition) {
    //     return null;
    //   }
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.txtTitle}>Speech to Text Recognition</Text>
            </View>

            <View style={styles.box} >
                <Text style={styles.lstn} >Microphone: {listening ? 'on' : 'off'}</Text>
                <Button title='Start' onClick={SpeechRecognition.startListening} color='green'></Button>
                <Button title='Stop' onClick={SpeechRecognition.stopListening} color='red' ></Button>
                <Button title='Reset' onClick={resetTranscript} color='gray'></Button>
                {/* <p>{transcript}</p> */}
            </View>
            {/* <Button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd={SpeechRecognition.stopListening}
        onMouseUp={SpeechRecognition.stopListening}
      >Hold to talk</Button> */}

            <View style={styles.txtTranscript}>
                <Text>{transcript}</Text>
            </View>

            {/* <textarea value={transcript}>
            </textarea> */}

        </View>
    )
}

export default speechtoText;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bcdc99',
        position: 'absolute',
        padding: 2,
        margin: 90,
    },
    txtTitle: {
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center',
        padding: 5,
    },
    box: {
        position: 'relative',
        justifyContent: 'center',
        paddingBottom: 15,
    },
    lstn: {
        position: 'relative',
        textAlign: 'center',
        paddingBottom: 8,
        color: 'black',
        fontSize: 18,
        textDecorationLine: 'underline'
    },
    txtTranscript: {
        backgroundColor: 'red',
        justifyContent: 'flex-start'
    },
})