"use client"
import React from "react";
import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";
import {
    Table,
    TableHeader,
    TableCell,
    View,
    TableBody,
    DataTableCell,
} from "@david.kucsai/react-pdf-table";

export default function Invoice({ order }) {
    console.log("Invoice", order);
    return (

        <>




            <Document>

                <Page style={styles.body}>


                    <Text style={styles.header} fixed>
                        ~ {new Date().toLocaleString()} ~
                    </Text>
                    <Text style={styles.title}>Seller Jobx</Text>
                    <Text style={styles.author}>phone:xxxxxxxxxxxx</Text>
                    <Text style={styles.subtitle}>email:jobx@gmail.com</Text>

                    <Text style={styles.subtitle}>Location :Silicon Valley,   {"\n"}
                        industrial region around the southern   {"\n"}
                        shores of San Francisco Bay,    {"\n"}
                        California, U.S.,</Text>

                    <div className="mb-2"  ></div>

                    <Text style={styles.header} fixed>
                        ~ {new Date().toLocaleString()} ~
                    </Text>

                    <Text style={styles.title}>Order buyer</Text>
                    <Text style={styles.title}>Order Invoice</Text>
                    <Text style={styles.author}>jobx</Text>
                    <Text style={styles.subtitle}>Order Summary</Text>

                    <Table>
                        <TableHeader>
                            <TableCell>package
                                _name:</TableCell>

                            <TableCell>payment
                                _provider:</TableCell>
                            <TableCell>amount:</TableCell>
                            <TableCell> paid_
                                in_
                                currency:</TableCell>

                            <TableCell>default
                                _amount: :</TableCell>
                            <TableCell>  payment
                                _status:</TableCell>
                        </TableHeader>
                    </Table>

                    <Table data={order}>
                        <TableBody>
                            <DataTableCell getContent={(x) => x.package_name} />

                            <DataTableCell getContent={(x) => x.payment_provider} />
                            <DataTableCell getContent={(x) => `$${x.amount}    `} />
                            <DataTableCell getContent={(x) => x.paid_in_currency} />
                            <DataTableCell getContent={(x) => `$${x.default_amount}`} />
                            <DataTableCell getContent={(x) => x.payment_status} />
                        </TableBody>
                    </Table>

                    {order.map((order, index) => (

                        <Text key={index} style={styles.text}>
                            <Text>
                                Date: {"               "}
                                {new Date(order.createdAt).toLocaleString()}
                            </Text>
                            {"\n"}
                            <Text>
                                Order Id: {"         "}
                                {order?.order_id}
                            </Text>
                            {"\n"}
                            <Text>
                                Order Id: {"         "}
                                {order?.transaction_id}
                            </Text>
                            {"\n"}
                            <Text>
                                Order Status: {"  "}
                                {order?.payment_status}
                            </Text>
                            {"\n"}
                            <Text>
                                Total Paid: {"       "}
                                ${order?.amount}
                            </Text>
                        </Text>
                    ))}
                    <Text style={styles.footer}> ~ Thank you for shopping with us ~ </Text>
                </Page>

            </Document>
        </>
    )

}

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
        backgroundColor: 'green',
        color: "white"
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    author: {
        fontSize: 12,
        textAlign: "center",
        marginBottom: 40,
    },
    subtitle: {
        fontSize: 18,
        margin: 12,
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "white"
    },
    footer: {
        padding: "100px",
        fontSize: 18,
        marginBottom: 20,
        textAlign: "center",
        color: "white"
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "white"
    },
    table: {
        display: 'table',
        width: 'auto',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
    },
    tableRow: { flexDirection: 'row' },
    tableCell: {
        marginVertical: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
    },
});
