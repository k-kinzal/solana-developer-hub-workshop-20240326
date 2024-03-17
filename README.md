# Solana Developer Hub Workshop #4

https://lu.ma/dwti8pwv

- 開催場所: 東京
- 時間: 3月26日火曜日 19:00 - 20:30 (18:30 入場開始)

## 作るもの

## ワークショップコンテンツ

### 必要なもの

- GitHubアカウント
    - https://github.com/signup

### 1. ワークショップをはじめる準備をしよう

本ワークショップではCodespaceを利用します。

わかる方はローカルにcloneしても構いません。
その場合は、事前にnode/npmの実行環境を構築の上、1.1〜1.2をスキップして1.3から始めてください。

#### 1.1. GitHubリポジトリをforkしよう

下記のリポジトリを開きます。

- [https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/)

右上の「Fork」ボタンをクリックします。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/1281825/69a8ee40-9340-4200-b85f-f112f4bf5fdf)

Create a new forkの画面で何も設定は変更せずに「Create fork」ボタンをクリックします。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/bb01f5a9-eaea-4e53-a3d9-c9e4682f5780)

少し待つと下記のようにリポジトリが表示されます。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/dacd18b5-2a88-4838-8975-0d5720e09e74)

#### 1.2. GitHub Actionsを有効にする

#### 1.3. GitHub Pagesを有効にする

#### 1.4. Codespacesを開く

右上の「Code」ボタンをクリックします。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/bc7859af-29b3-44c2-a083-2eef072ca3c0)

次に開いたメニューの「Codespaces」タブをクリックします。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/242c4020-0c98-4fa3-8478-ac2cab2419c8)

タブ内の「Create codespaces on main」ボタンをクリックします。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/f2fda58d-15c9-43f3-be72-d3a0865d95b9)

以下のように表示されたら成功です。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/6fbeadfe-ea3d-4fdd-b3d9-413402db5e99)

#### 1.5. プロジェクトをセットアップする

##### 1.5.1. .envファイルを作成する

プロジェクトのセットアップを行います。
下記のターミナルタブにコマンドを入力していきましょう。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/417b069a-a671-40e2-a0a6-56f18289ea61)

`npm run init`とコマンドを入力して実行すると下記のように表示され、`.env`ファイルが作成されます。

```bash
npm run init

> solana-developer-hub-workshop-20240326@0.0.0 init
> cp .env.template .env
```

`.env`ファイルを開くと下記のような設定が書かれます。

```:.env
VITE_RPC_ENDPOINT=https://api.devnet.solana.com
VITE_NFT_META_URI=https://raw.githubusercontent.com/[your name]/solana-developer-hub-workshop-20240326/main/src/assets/metada.json
```

`[your name]`の部分をあなたのGitHubアカウントの名前に変更してください。

##### 1.5.2. プロジェクトの依存解決をする

`npm install`とコマンドを入力すると下記のように表示され、`node_modules`ディレクトリが作成されます。

```bash
npm install

...

added 2415 packages, and audited 2417 packages in 1m

...
```

※ Warnなどいろいろ出ますが`added`の行が出力されれば問題ありません

##### 1.5.3. 開発用サーバーを立ち上げる

`npm run dev`とコマンドを入力すると下記のように表示され、開発用サーバーが立ち上がります。

```bash
npm run dev

  VITE v5.1.5  ready in 791 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

右下に出てくるポップアップの「ブラウザーで開く」ボタン、またはポートタブから開発用サーバーを開いてください。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/b518a53d-332e-49d9-ad63-7b838882b1cf)

下記のような画面を表示できたら開発する準備が完了です。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/86a86019-6a28-44a4-a855-322877d75fe5)

### 2. ウォレットに接続できるようにする

「CONNECT WALLET」ボタンを押しても今は何も起きません。
`src/pages/WalletConnectPane.jsx`を開いて、`showWalletModal`関数の中を実装しましょう。

**src/pages/WalletConnectPane.jsx**
```diff
  const showWalletModal = () => {
+    setVisible(true);
  }
```

この状態で再度「CONNECT WALLET」ボタンをクリックするとウォレットに接続することができます。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/7f546c22-92e4-4a88-b241-edc65aa44aa9)

この`setVisible`という関数は`@solana/wallet-adapter`のReact向けの機能になる`@solana/wallet-adapter-react-ui`の機能で、ウォレット接続モーダルを表示してくれます。
今回は省略しましたが、利用するには下記のようにCSSを読み込むこと、`ConnectionProvider`、`WalletProvider`、`WalletModalProvider`を設定することが必要になります。

**src/App.jsx**
```javascript
// モーダルのCSS設定を読み込み
import "@solana/wallet-adapter-react-ui/styles.css";

...

export const App = () => {
  return (
    ...
    
      <ConnectionProvider endpoint={RPC_ENDPOINT}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            ...
          </WalletModalProvider>
        </WalletProvider>
    
    ...
  );
};
```

ウォレットを接続して下記の表示ができたら成功です。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/fb3e6048-b390-4dfc-936b-1020b3cf3929)

### 3. NFTを発行する

#### 3.1. 発行するNFTの設定を行う

まず、今はk-kinzalのアイコンが設定されているため、`src/assets/nft.png`を好きな画像に変えましょう。
おすすめは正方形のの画像です。

次に`src/assets/metada.json`を好みの形に変更しましょう。

```json:src/assets/metada.json
{
  "name": "Solana Developer Hub Workshop #4",
  "description": "https://github.com/k-kinzal/solana-developer-hub-workshop-20240326",
  "image": "https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/blob/main/src/assets/nft.png?raw=true",
  "external_url": "https://github.com/k-kinzal/solana-developer-hub-workshop-20240326",
  "attributes": [],
  "properties": {
    "files": [
      {
        "uri": "https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/blob/main/src/assets/nft.png?raw=true",
        "type": "image/png"
      }
    ],
    "category": "image",
    "creators": [
      {
        "address": "GezdpBqe9R8ZYpfUAf64NaoqYXNvoSL9gE5ZMqDFcZYa"
      }
    ]
  }
}
```

最小限の変更としては `https://github.com/k-kinzal` の部分をご自身のユーザー名に変更し、`.properties.creators[0].address`をご自身のウォレットアドレスに変更してください。

これらの変更後に下記のコマンドを実行するとNFTの情報を変更できます。

```bash
git add src/assets/
```
```bash
git commit -m "update NFT"

[main fd47b3f] update NFT
 1 file changed, 0 insertions(+), 0 deletions(-)
```
```bash
git push origin HEAD

Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 2 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 55.42 KiB | 18.47 MiB/s, done.
Total 5 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/k-3278/solana-developer-hub-workshop-20240326
   6278106..fd47b3f  HEAD -> main
```

開発用サーバーで下記のように画像などが変わったら成功です。

![](https://github.com/k-kinzal/solana-developer-hub-workshop-20240326/assets/163698362/888e49ce-3ef7-4275-a278-4401567bc5eb)

#### 3.2. NFTをMintできるようにする

「MINT」ボタンを押しても今は何もおきません。
`src/pages/MintPane.jsx`を開いて`mintNft`関数の中を実装しましょう。

```diff
  const mintNft = async () => {
+     const builder = createNft(umi, {
+       generateSigner(umi),
+       name: metadata.name,
+       uri: NFT_META_URI,
+       sellerFeeBasisPoints: percentAmount(0),
+     });
+     const { signature } = await builder.sendAndConfirm(umi);
  };
```

`createNft`でNFTを作成する準備をします。その後に`sendAndConfirm`でSolanaネットワークに送信することでNFTを作成することができます。

この状態で開発用サーバーで「MINT」ボタンを押すとNFTをMintできますが、Mint中でも何回もMintできたり、Mint完了したことがわかりにくいです。
UIを整える意味で少しコードを変更してみましょう。

まずは1回だけMintできるようにします。

```diff
  const [loading, setLoading] = useState(false);
  
  ...
  
  const mintNft = async () => {
+     setLoading(true);
+
     const builder = createNft(umi, {
       generateSigner(umi),
       name: metadata.name,
       uri: NFT_META_URI,
       sellerFeeBasisPoints: percentAmount(0),
     });
     const { signature } = await builder.sendAndConfirm(umi);
+
+     setLoading(false);
  };
```

Reactの機能を使って「MINT」ボタンを押したさいに、`loading`という状態を`true`に変え、Mintに成功したら`false`に変えます。
こうすることで`Button`の`disabled={loading}`で`disabled`の値が変わり、Mint中はボタンを押せなくなります。

```html
<Button
  variant="contained"
  color="secondary"
  size="small"
  onClick={mintNft}
  disabled={loading}
>
  Mint
</Button>
```

次にMintが完了したさいに`signature`という状態をMintを実行したトランザクションのシグネチャに変えます。

```diff
  const [signature, setSignature] = useState(null);
  
  ...
  
  const mintNft = async () => {
     setLoading(true);
     const builder = createNft(umi, {
       generateSigner(umi),
       name: metadata.name,
       uri: NFT_META_URI,
       sellerFeeBasisPoints: percentAmount(0),
     });
     const { signature } = await builder.sendAndConfirm(umi);

+     setSignature(signature);
     setLoading(false);
  };
```

`signature`という状態では設定の有無で「MINT」ボタンを出すか、Transactionへのリンクを出すかを決定しています。

```html
{/* 署名がない場合はMintボタンを表示 */}
{signature === null && (
  <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={mintNft}
          disabled={loading}
  >
    Mint
  </Button>
)}
{/* 署名がある場合はトランザクションへのリンクを表示 */}
{signature !== null && (
  <Button
          size="small"
          href={`https://explorer.solana.com/tx/${signature}`}
          target="_blank"
  >
    View Transaction
  </Button>
)}
```

ここまで変更できたら、変更の内容を反映しましょう。

これらの変更後に下記のコマンドを実行するとNFTの情報を変更できます。

```bash
git add .
```
```bash
git commit -m "ワークショップに合わせてNFTを作成できるように変更"

[main fd47b3f] ワークショップに合わせてNFTを作成できるように変更
 1 file changed, 0 insertions(+), 0 deletions(-)
```
```bash
git push origin HEAD

Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 2 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 55.42 KiB | 18.47 MiB/s, done.
Total 5 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To https://github.com/k-3278/solana-developer-hub-workshop-20240326
   6278106..fd47b3f  HEAD -> main
```

### 4. GitHub Pagesを確認する



### 5. (Optional) いろいろなNFTを発行してみよう