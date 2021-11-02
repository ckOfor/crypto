// react
import React, { useEffect, useState } from "react";

// react-native
import {
    View, ViewStyle, StatusBar, Platform, Text, TextStyle, FlatList
} from "react-native";

// third-parties
import { AntDesign } from 'react-native-vector-icons';
import {
    SlideAreaChart,
} from 'react-native-slide-charts'
import { LinearGradient } from 'expo-linear-gradient';

// components
import { Button } from "../../components/button";


// styles
import { Layout } from "../../constants";
import { translate } from "../../i18n";
import { colors } from "../../theme";
import { currency } from "expo-localization";

const ROOT: ViewStyle = {
    height: Layout.window.height,
    // width: Layout.window.width,
    backgroundColor: colors.black,
    padding: 10
};

const BALANCE_HEADER: TextStyle = {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700'
};

const MONEY_RECEIVED: TextStyle = {
    color: colors.whiteThree,
    marginTop: 20,
    marginBottom: 5,
    fontWeight: '500'
};

const BALANCE: TextStyle = {
    ...BALANCE_HEADER,
    fontSize: 30
};

const PERCENTAGE_VIEW: ViewStyle = {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
};

const PERCENTAGE: TextStyle = {
    color: colors.white,
    fontSize: 16
};

const BOTTOM_TEXT: TextStyle = {
    color: colors.whiteTwo,
    fontSize: 16
};

const Home = ({ navigation, route, authSearchKey }) => {
    // PROPS
    const [selectedDate, setSelectedDate] = useState([])
    const [selectedData, setSelectedData] = useState([])
    const [selectedIncome, setSelectedIncome] = useState('')
    const [selectedOutcome, setSelectedOutcome] = useState('')
    const [selectedMoneyReceived, setSelectedMoneyReceived] = useState('')
    const [selectedPercentage, setSelectedPercentage] = useState('')

    // LIFECYCLE
    useEffect(() => {
        StatusBar.setBarStyle("light-content")
        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor(colors.black)
        }
    }, [])

    const data = [
        {
            id: 0,
            name: 'Apr',
            body: 'to Jun',
            balance: '',
            data: [
                { x: 0, y: 0 },
                { x: 1, y: 5 },
                { x: 2, y: 6 },
                { x: 3, y: 11 },
                { x: 4, y: 50 },
                { x: 5, y: 3 },
                { x: 6, y: 34 },
                { x: 7, y: 5 },
                { x: 8, y: 6 },
                { x: 9, y: 11 },
                { x: 10, y: 50 },
                { x: 11, y: 3 },
                { x: 12, y: 34 },
            ],
            moneyReceived: '$27,802.5',
            percentage: '15%',
            currency: '$',
            income: '75%',
            outcome: '25%'
        },
        {
            id: 1,
            name: '1',
            body: 'Month',
            balance: '',
            data: [
                { x: 1, y: 1 },
                { x: 2, y: 2 },
                { x: 3, y: 3 },
                { x: 4, y: 4 },
                { x: 5, y: 5 },
                { x: 6, y: 6 },
                { x: 7, y: 7 },
                { x: 8, y: 8 },
                { x: 9, y: 9 },
                { x: 10, y: 10 },
                { x: 11, y: 11 },
                { x: 12, y: 12 },
                { x: 13, y: 13 },
                { x: 14, y: 14 },
                { x: 15, y: 15 },
                { x: 16, y: 14 },
                { x: 17, y: 13 },
                { x: 18, y: 12 },
                { x: 19, y: 11 },
                { x: 20, y: 10 },
                { x: 21, y: 9 },
                { x: 22, y: 8 },
                { x: 23, y: 7 },
                { x: 24, y: 6 },
                { x: 25, y: 5 },
                { x: 26, y: 4 },
                { x: 27, y: 3 },
                { x: 28, y: 2 },
                { x: 29, y: 1 },
            ],
            moneyReceived: '$10,002.0',
            percentage: '5%',
            currency: '$',
            income: '15%',
            outcome: '5%'
        },
        {
            id: 2,
            name: '6',
            body: 'Month',
            balance: '',
            data: [
                { x: 1, y: 5 },
                { x: 2, y: 6 },
                { x: 3, y: 11 },
                { x: 4, y: 50 },
                { x: 5, y: 3 },
                { x: 6, y: 34 },
                { x: 7, y: 5 },
                { x: 8, y: 6 },
                { x: 9, y: 11 },
                { x: 10, y: 50 },
                { x: 11, y: 3 },
                { x: 12, y: 34 },
                { x: 27, y: 11 },
            ],
            moneyReceived: '$30,000',
            percentage: '20%',
            income: '75%',
            outcome: '15%'
        },
        {
            id: 3,
            name: '1',
            body: 'Year',
            balance: '',
            data: [
                { x: 1, y: 5 },
                { x: 2, y: 6 },
                { x: 3, y: 11 },
                { x: 4, y: 50 },
                { x: 5, y: 3 },
                { x: 6, y: 34 },
            ],
            moneyReceived: '$67,802.5',
            percentage: '15%',
            income: '95%',
            outcome: '35%'
        }
    ]

    const renderButton = ({ item }) => {
        const { name, id, body, income, outcome, moneyReceived, percentage } = item

        return (
            <View
                style={{
                }}
            >
                <Button
                    onPress={() => {
                        setSelectedData(item.data)
                        setSelectedDate(item)
                        setSelectedIncome(income)
                        setSelectedOutcome(outcome)
                        setSelectedMoneyReceived(moneyReceived)
                        setSelectedPercentage(percentage)
                    }}
                    style={{
                        marginHorizontal: 10,
                        borderRadius: 10,
                        width: Layout.window.width / 4,
                        backgroundColor: selectedDate.id === id ? colors.companyOrange : colors.buttons,

                    }}
                    text={name}
                >
                    <View>
                        <Text
                            style={{
                                color: colors.white,
                                textAlign: 'center'
                            }}
                        >
                            {name}
                        </Text>

                        <Text
                            style={{
                                color: colors.white,
                                textAlign: 'center',
                                marginTop: 2
                            }}
                        >
                            {body}
                        </Text>
                    </View>
                </Button>


            </View>
        )
    }

    return (
        <View
            style={ROOT}
        >

            <View>
                <Text
                    style={BALANCE_HEADER}
                >
                    {translate('home.yourBalance')}
                </Text>
            </View>

            <View>
                <Text
                    style={MONEY_RECEIVED}
                >
                    {translate('home.moneyReceived')}
                </Text>

                <View
                    style={PERCENTAGE_VIEW}
                >
                    <Text
                        style={BALANCE}
                    >
                        {selectedMoneyReceived}
                    </Text>

                    <View
                        style={PERCENTAGE_VIEW}
                    >
                        <Text
                            style={PERCENTAGE}
                        >
                            {selectedPercentage}
                        </Text>

                        <AntDesign
                            name="arrowup"
                            color={colors.white}
                            size={16}
                        />
                    </View>
                </View>
            </View>

            <View
                style={{
                    marginTop: Layout.window.height / 25
                }}
            >
                <SlideAreaChart
                    scrollable
                    style={{
                        marginTop: Layout.window.height / 25
                    }}
                    data={selectedData}
                    paddingBottom={8}
                    toolTipProps={{
                        toolTipTextRenderers: [
                            ({ scaleY, y }) => ({
                                text: scaleY
                                    .invert(y)
                                    .toFixed(1)
                                    .toString(),
                            }),
                        ],
                        backgroundColor: colors.buttons,
                        borderRadius: 10,
                        padding: 20,
                        height: 30,
                        textStyles: [{
                            color: colors.white,
                            fontSize: 18
                        }]
                    }}
                    style={{
                        backgroundColor: colors.black,
                        color: 'red'
                    }}
                    chartLineColor={colors.companyOrange}
                    animated
                    yAxisProps={{
                        verticalLineWidth: 0,
                        horizontalLineWidth: 0
                    }}
                    xAxisProps={{
                        barWidth: 0,
                        horizontalLineWidth: 0
                    }}
                    cursorColor={'red'}
                    cursorMarkerHeight={0}
                    displayCursor={false}
                    cursorProps={{
                        cursorWidth: 0,
                    }}
                />
            </View>

            <View style={{ height: Layout.window.height / 6 }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={renderButton}
                    horizontal
                    contentContainerStyle={{
                        marginTop: 20,
                        justifyContent: "space-between",
                    }}

                />
            </View>

            <View
                style={PERCENTAGE_VIEW}
            >
                <Text
                    style={BOTTOM_TEXT}
                >
                    {translate('home.income')}
                </Text>

                <View
                    style={PERCENTAGE_VIEW}
                >
                    <Text
                        style={PERCENTAGE}
                    >
                        {selectedIncome}
                    </Text>

                    <AntDesign
                        name="arrowdown"
                        color={colors.white}
                        size={16}
                    />
                </View>
            </View>

            <View
                style={[PERCENTAGE_VIEW]}
            >
                <Text
                    style={BOTTOM_TEXT}
                >
                    {translate('home.outcome')}
                </Text>

                <View
                    style={PERCENTAGE_VIEW}
                >
                    <Text
                        style={PERCENTAGE}
                    >
                        {selectedOutcome}
                    </Text>

                    <AntDesign
                        name="arrowup"
                        color={colors.white}
                        size={16}
                    />
                </View>
            </View>



        </View>
    )
}

export default Home
