import { InventoryService } from '../../services/InventoryService.js';
import { PaymentService } from '../../services/PaymentService.js';
import { ShippingService } from '../../services/ShippingService.js';

class CheckoutFacade {
    constructor() {
        this.inventoryService = new InventoryService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderDetails) {
        // TODO: Implement the Facade method.
        // This method should orchestrate the calls to the subsystem services
        // in the correct order to simplify the checkout process.
        // 1. Check if all products are in stock using `inventoryService.checkStock()`.
        // 2. If they are, process the payment using `paymentService.processPayment()`.
        // 3. If payment is successful, arrange shipping using `shippingService.arrangeShipping()`.
        // 4. Log the result of each step. If a step fails, log it and stop.
        console.log("[Facade] Starting order placement process...");
        const inStock = this.inventoryService.checkStock(orderDetails.productIds);
        if (!inStock) {
            console.log("[Facade] Order failed: Items out of stock.");
            return false;
        }

        const paymentSuccess = this.paymentService.processPayment(orderDetails.userId, 1500);
        if (!paymentSuccess) {
            console.log("[Facade] Order failed: Payment processing failed.");
            return false;
        }

        this.shippingService.arrangeShipping(orderDetails.userId, orderDetails.shippingInfo);
        console.log("[Facade] Order placed successfully!");
        return true;
    }
}

export { CheckoutFacade };
