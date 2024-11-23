import * as ReactDOM from "react-dom/client"
import "./index.css"
import Layout from "./Layout.tsx"

import ModalProvider from "./context/ModalProvider.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
	<ModalProvider>
		<Layout />
	</ModalProvider>
)
