import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f7',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 360,
    borderRadius: 18,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    height: '100%',
    maxHeight: 420,
  },
  image: {
    width: '100%',
    height: 220,
    objectFit: 'fill',
  },
  content: {
    padding: 14,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#d9f5e5',
    color: '#0a7d48',
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  description: {
    marginTop: 8,
    color: '#6b7280',
    fontSize: 14,
    lineHeight: 20,
  },
  footer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  button: {
    backgroundColor: '#0f766e',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});