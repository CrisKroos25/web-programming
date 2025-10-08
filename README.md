Diagrama de bae de datos, desde el primer modelo, hasta el modelo final.
<img width="880" height="750" alt="image" src="https://github.com/user-attachments/assets/ab5c3e4b-f4fe-4b37-bd4d-69a2f0e973c5" />

•	0001_initial.py
Representa la creación inicial del modelo Clients, que contiene los campos básicos para almacenar información de los clientes.

•	0002_rename_edad_clients_age.py
Realiza un cambio de nombre en el atributo del modelo Clients, renombrando el campo edad a age, con el objetivo de mantener consistencia en el uso de un mismo idioma (inglés) dentro de la aplicación.

•	0003_country.py
Crea el modelo Country, que almacena los países y servirá como referencia para los clientes.

•	0004_clients_country.py
Agrega un nuevo atributo country al modelo Clients, definido como una clave foránea que apunta al modelo Country, permitiendo asociar cada cliente a un país específico.

•	0005_direction.py
Crea el modelo Direction, el cual está relacionado con Clients mediante una clave foránea. Este modelo permite registrar direcciones vinculadas a cada cliente.

•	0006_order.py
Crea el modelo Order, que también está relacionado con Clients a través de una clave foránea. Permite almacenar los pedidos realizados por cada cliente.

•	0007_typepaymentmethod_paymentmethod.py
Crea los modelos TypePaymentMethod y PaymentMethod.

<ul>
  <li>TypePaymentMethod define los diferentes tipos de pago.</li>
  <li>PaymentMethod almacena qué tipo de pago utilizó cada cliente, vinculando ambos modelos mediante claves foráneas.</li>
</ul>

<img width="458" height="181" alt="image" src="https://github.com/user-attachments/assets/0af27488-a595-4e0a-bfff-e3e82745808e" />

<img width="380" height="342" alt="image" src="https://github.com/user-attachments/assets/aad27c01-5ff2-4885-a78a-c5c9b78814f1" />

Primer modelo:
<img width="1071" height="155" alt="image" src="https://github.com/user-attachments/assets/9dc06c15-e032-4343-b600-69168dbd87e2" />

Segundo modelo:
<img width="865" height="188" alt="image" src="https://github.com/user-attachments/assets/80e43a63-7a55-4cf0-8e7d-5f77eb0281be" />

Tercer modelo:
<img width="1013" height="240" alt="image" src="https://github.com/user-attachments/assets/c87df47c-c744-43e2-9938-d504db1cf312" />

Cuarto modelo:
<img width="1122" height="172" alt="image" src="https://github.com/user-attachments/assets/aba33596-9c13-4d37-853d-8c1d89d1672c" />

Quinto modelo:
<img width="1203" height="251" alt="image" src="https://github.com/user-attachments/assets/8866b34c-cf0f-4159-8b0a-e43c9e9b83b9" />
