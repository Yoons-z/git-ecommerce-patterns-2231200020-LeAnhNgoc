// The Context class that uses a strategy
class ShippingCalculator {
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(packageDetails) {
        // TODO: Call the `calculate` method on the currently set strategy object.
        // Pass the `packageDetails` to it and return the result.
        if (!this.strategy) {
            throw new Error("Shipping strategy not set.");
        }
        return this.strategy.calculate(packageDetails);
    }
}

// The Strategy interface (conceptual in JS)
class ShippingStrategy {
    calculate(packageDetails) {
        throw new Error("This method should be overridden!");
    }
}

// Concrete Strategy 1: Flat Rate
class FlatRateStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        // TODO: Return a fixed shipping cost, e.g., 10.
        return 10;
    }
}

// Concrete Strategy 2: Weight-Based
class WeightBasedStrategy extends ShippingStrategy {
    calculate(packageDetails) {
        // TODO: Return a cost based on the package weight.
        // For example, $3 per kilogram. `packageDetails.weight` will be in kg.
        const ratePerKg = 3;
        return packageDetails.weight * ratePerKg;
    }
}

export { ShippingCalculator, FlatRateStrategy, WeightBasedStrategy };
