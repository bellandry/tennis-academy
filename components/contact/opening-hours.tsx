export default function OpeningHours() {
  return (
    <div className="bg-tennis-50 p-6 rounded-lg border border-tennis-100">
      <h4 className="font-bold text-lg mb-3">Horaires d&apos;ouverture</h4>
      <ul className="space-y-2">
        <li className="flex justify-between">
          <span className="text-gray-700">Lundi - Vendredi</span>
          <span className="font-medium">6h00 - 18h00</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-700">Samedi</span>
          <span className="font-medium">9h00 - 18h00</span>
        </li>
        <li className="flex justify-between">
          <span className="text-gray-700">Dimanche</span>
          <span className="font-medium">10h00 - 16h00</span>
        </li>
      </ul>
    </div>
  );
}
