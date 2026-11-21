import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function SampleModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.container}>
        <Image
          source={require('../assets/snack-icon.png')}
          style={styles.image}
          resizeMode="contain"
        />
        <ScrollView style={styles.scroll}>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            {'\n\n'}
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
            {'\n\n'}
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
            {'\n\n'}
            Quis autem vel eum iure reprehenderit qui in ea voluptate velit
            esse quam nihil molestiae consequatur, vel illum qui dolorem eum
            fugiat quo voluptas nulla pariatur. At vero eos et accusamus et
            iusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident.
            {'\n\n'}
            Similique sunt in culpa qui officia deserunt mollitia animi, id est
            laborum et dolorum fuga. Et harum quidem rerum facilis est et
            expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime
            placeat facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus.
            {'\n\n'}
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et
            molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat.
            {'\n\n'}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
            massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos.
            {'\n\n'}
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
            sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
            ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
            vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
            lacinia aliquet.
          </Text>
        </ScrollView>

        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeText}>CLOSE</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  scroll: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: '#000',
  },
  closeButton: {
    backgroundColor: '#E53935',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
    marginBottom: 20,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});