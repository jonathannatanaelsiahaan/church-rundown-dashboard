import React from "react";

import { Page, Text, View, Font, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

Font.register({
	family: 'Oswald',
	src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
  
const styles = StyleSheet.create({
	body: {
	  paddingTop: 35,
	  paddingBottom: 65,
	  paddingHorizontal: 35,
	},
	title: {
	  fontSize: 24,
	  textAlign: 'center',
	  fontFamily: 'Oswald'
	},
	subtitle: {
	  fontSize: 15,
	  margin: 12,
	  fontFamily: 'Oswald'
	},
	text: {
	  margin: 12,
	  fontSize: 14,
	  textAlign: 'justify',
	  fontFamily: 'Oswald'
	},
	header: {
	  fontSize: 12,
	  marginBottom: 20,
	  textAlign: 'center',
	  color: 'grey',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	},
	box: {
		borderStyle: 'solid',
		borderWidth: 1,
		marginTop: 5
	}
});

const Doc = (props) => (
	<Document>
		<Page style={styles.body}>
			<Text style={styles.title}>Daftar Koordinator Untuk Setiap Sektor</Text>
			{Object.values(props.sectorCoordinators).map((sectorCoordinator) => {
				return (
					<View style={styles.box}>
						<Text style={styles.subtitle}>
							{"Nama Sektor : " + sectorCoordinator.name}
						</Text>
						<Text style={styles.text}>
							{"Nama Kordinator : " + props.concregations[sectorCoordinator.concregationID].name}
						</Text>
					</View>
				)
			})}
		</Page>
	</Document>
);

  
  const SectorCoordinatorMenuPdf = (props) => {
    return (
      <div>
        <PDFDownloadLink document={Doc(props)} fileName="daftar_kordinator_sektor.pdf">
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      </div>
    );
  };

export default SectorCoordinatorMenuPdf;